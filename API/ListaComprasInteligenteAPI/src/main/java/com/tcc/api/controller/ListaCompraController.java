package com.tcc.api.controller;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tcc.api.dto.ListaCompra;
import com.tcc.api.entity.CardapioSemanal;
import com.tcc.api.entity.ReceitaIngrediente;
import com.tcc.api.entity.Usuario;
import com.tcc.api.response.Response;
import com.tcc.api.security.jwt.JwtTokenUtil;
import com.tcc.api.service.CardapioSemanalService;
import com.tcc.api.service.ReceitaIngredienteService;
import com.tcc.api.service.UsuarioService;
import com.tcc.api.util.Util;

@RestController
@RequestMapping(value="/api/lista")
@CrossOrigin(origins="*")
public class ListaCompraController {
	
	private static final Logger LOG = LoggerFactory.getLogger(ListaCompraController.class);
	
	@Autowired
	protected JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	private UsuarioService usuarioService;
	
	@Autowired
	private ReceitaIngredienteService recingService;
	
	@Autowired
	private CardapioSemanalService cardapioService;
	
	private final String REGEX_NUMBER = "[^0-9.]";
	
	//HTML
	@GetMapping(value = "gerarLista/{id}")
	public ResponseEntity<Response<ListaCompra>> gerarLista(@PathVariable("id") String data) {
		
		LOG.info("Inicio gerarLista listacompras...");
		
		Response<ListaCompra> response = new Response<ListaCompra>();
		
		List<ListaCompra> listaCompra = montaLista(data); //gerar a lista
		
		LOG.info("Ordena lista por ordem alfabetica...");
		Collections.sort(listaCompra); //ordem alfabetica
		
		if(listaCompra.isEmpty()) {
			LOG.info("Nao foi possivel gerar lista para cardapio do dia: {}", data);
			response.getErrors().add("Nao foi possivel gerar lista para cardapio do dia: "+data);
			return ResponseEntity.badRequest().body(response);
		}
		
		for (int i = 0; i < listaCompra.size(); i++) {
			response.getDatas().add(listaCompra.get(i));
		}
		LOG.info("Fim gerarLista listacompras...");
		
		return ResponseEntity.ok(response);
	}
	
	private List<ListaCompra> montaLista(String data) {
		
		LOG.info("Inicio montaLista listacompras...");
		
		List<ListaCompra> listas = new ArrayList<ListaCompra>();
		
		//pega o cardapio
		java.time.LocalDate dataLocalDate = Util.stringToLocalDate(data);
		LOG.info("Buscando cardapio do dia: {}", dataLocalDate);
		List<CardapioSemanal> cardapios = cardapioService.findAllByDataCriacao(dataLocalDate);//findById(id);
		
		//recupera todos ingredienteXreceita utilizados no cardapio
		LOG.info("Recupera todos os ingredientereceita do cardapio..");
		List<ReceitaIngrediente> listaIngredientes = new ArrayList<ReceitaIngrediente>();
		for (CardapioSemanal idRec : cardapios) {
			//if(idRec > 0) {
				recingService.findByReceitaId(idRec.getReceita().getId()).forEach(
						recing -> listaIngredientes.add(recing));
			//}
		}
		
		//AGRUPAR = https://emmanuelneri.com.br/2017/06/20/transformando-collections-em-map-stream-do-java-8/
		//CONVERSAO UNIDADES DE MEDIDA = https://www.baeldung.com/javax-measure
		
		//agrupa ingredientes pelo id
		LOG.info("Agrupando ingredientes..");
		Map<Long, List<ReceitaIngrediente>> ingredienteAgrupado = listaIngredientes.stream().collect(Collectors.groupingBy(ReceitaIngrediente::getIngredienteId));
		Map<String, String> listaAux = new HashMap<String, String>();
		
		for (Long valor : ingredienteAgrupado.keySet()) {
			List<ReceitaIngrediente> lista = ingredienteAgrupado.get(valor);
			String ingrediente = "";
			String unidadeMedida = "";
			BigDecimal qtdeTotal = BigDecimal.ZERO;
			
			for (ReceitaIngrediente rc : lista) {
				qtdeTotal = qtdeTotal.add(rc.getQuantidade());
				ingrediente = rc.getIngrediente().getNome();
				unidadeMedida = String.valueOf(rc.getUnidadeMedida());
				//System.out.println(rc.getIngrediente().getNome()+": "+qtdeTotal+""+rc.getUnidadeMedida());
			}
			
			if("UNI".equals(unidadeMedida)) {
				listaAux.put(ingrediente, qtdeTotal.intValue()+""+unidadeMedida);
			} else {
				listaAux.put(ingrediente, qtdeTotal+""+unidadeMedida);
			}
		}
		
		for (String key: listaAux.keySet()) {
			//System.out.println(key +": "+tratarUnidadeMedida(listaAux.get(key)));
			ListaCompra lc = new ListaCompra();
			lc.setItem(key +": "+tratarUnidadeMedida(listaAux.get(key)));
			lc.setDataCriacao(dataLocalDate);
			listas.add(lc);
		}
		
		LOG.info("Fim montaLista listacompras...");
		
		return listas;
	}
	
	/**
	 * XCR=250 ml
	 * COL=15 ml
	 * K=KILO
	 * KG=KILOGRAM
	 * G=GRAM
	 * MG=Unit<Length> milligram = MetricPrefix.MILLI(GRAM)
	 * L=LITRE
	 * ML=Unit<Length> millilitre = MetricPrefix.MILLI(LITRE)
	 * M=METRE
	 * CM=Unit<Length> centimeter = MetricPrefix.CENTI(METRE)
	 * MM=Unit<Length> millimeter = MetricPrefix.MILLI(METRE)
	 * UNI=nesse caso retorna direto pra lista de compra (COMPRAR UMA UNIDADE)
	 **/
	private String tratarUnidadeMedida(String unidade) {
		
		LOG.info("Inicio tratarUnidadeMedida listacompras...");
		
		BigDecimal unidadeMedida = new BigDecimal(unidade.replaceAll(REGEX_NUMBER, ""));
		String uniMed = "";
		
		if(unidade.contains("XCR")) { //250ml
			BigDecimal uniMedAux = unidadeMedida.multiply(new BigDecimal(250));
			if(uniMedAux.compareTo(new BigDecimal(1000)) >= 0) {
				uniMedAux = uniMedAux.divide(new BigDecimal(1000));
				uniMed = uniMedAux.toString() +" litro(s)";
			} else {
				uniMed = uniMedAux.toString() +" mL";
			}
		} else if(unidade.contains("COL")) {//15ml
			BigDecimal uniMedAux = unidadeMedida.multiply(new BigDecimal(15));
			if(uniMedAux.compareTo(new BigDecimal(1000)) >= 0) {
				uniMedAux = uniMedAux.divide(new BigDecimal(1000));
				uniMed = uniMedAux.toString() +" litro(s)";
			} else {
				uniMed = uniMedAux.toString() +" mL";
			}
		} else if(unidade.contains("KG")) {
			uniMed = unidadeMedida.toString() + " kg";
		} else if(unidade.contains("G")) {
			if(unidadeMedida.compareTo(new BigDecimal(1000)) >= 0) {
				unidadeMedida = unidadeMedida.divide(new BigDecimal(1000));
				uniMed = unidadeMedida.toString() +" kg";
			} else {
				uniMed = unidadeMedida.toString() +" g";
			}
			
		} else if(unidade.contains("MG")) {
			if(unidadeMedida.compareTo(new BigDecimal(1000)) >= 0) {
				unidadeMedida = unidadeMedida.divide(new BigDecimal(1000));
				uniMed = unidadeMedida.toString() +" g";
			} else {
				uniMed = unidadeMedida.toString() +" mg";
			}
			
		} else if(unidade.contains("L")) {
			uniMed = unidadeMedida.toString() + " litro(s)";
		} else if(unidade.contains("ML")) {
			if(unidadeMedida.compareTo(new BigDecimal(1000)) >= 0) {
				unidadeMedida = unidadeMedida.divide(new BigDecimal(1000));
				uniMed = unidadeMedida.toString() +" litro(s)";
			} else {
				uniMed = unidadeMedida.toString() +" mL";
			}
		} else if(unidade.contains("M")) {
			uniMed = unidadeMedida.toString() +" metros";
		} else if(unidade.contains("CM")) {
			if(unidadeMedida.compareTo(new BigDecimal(100)) >= 0) {
				unidadeMedida = unidadeMedida.divide(new BigDecimal(100));
				uniMed = unidadeMedida.toString() +" metros";
			} else {
				uniMed = unidadeMedida.toString() +" cm";
			}
		} else if(unidade.contains("MM")) {
			if(unidadeMedida.compareTo(new BigDecimal(1000)) >= 0) {
				unidadeMedida = unidadeMedida.divide(new BigDecimal(1000));
				uniMed = unidadeMedida.toString() +" metros";
			} else {
				uniMed = unidadeMedida.toString() +" mm";
			}
		} else { //UNIDADE
			uniMed = unidadeMedida.toString() +" unidade(s)";
		}
		
		LOG.info("Fim tratarUnidadeMedida listacompras...");
		
		return uniMed.replace(".", ",");
	}
	
	public Usuario userFromRequest(HttpServletRequest request) {
		String token = request.getHeader("Authorization"); //PEGA TOKEN DO HEADER
		String username = jwtTokenUtil.getUsernameToken(token);
		return usuarioService.findByUsername(username);
	}
	
	//JASPER
//	@PostMapping(value = "/gerar/{id}")
//	public void exportListaCompra(@PathVariable("id") Long id, HttpServletResponse httpServletResponse) throws IOException, JRException {
//		
//		OutputStream os = httpServletResponse.getOutputStream();
//		
//		try {
//			
//			List<ListaCompra> listaCompra = montaLista(id); //gerar a lista
//			
//			if(!listaCompra.isEmpty()) {
//			
//				Connection connection = dataSource.getConnection();
//				LOGGER.info("exportListaCompra() - acessando conexao com bd");
//				
//				InputStream logo = this.getClass().getResourceAsStream("/jasper/img/logo.png");
//				//File logoFile = new File(this.getClass().getClassLoader().getResource("jasper/img/logo.png").getPath());
//				//String logo = logoFile.getPath();
//				
//				Map parametros = new HashMap(); 
//			    parametros.put("ID", id.intValue());
//			    parametros.put("logo", logo);
//			    String nomeRelatorio = "listacompra";
//			    //LOGGER.info("exportListaCompra() - id="+id+"\nlogo="+logo+"\nrelatorio="+nomeRelatorio);
//				
//			    byte[] relatorio = jasperService.gerarPDF(connection, nomeRelatorio, parametros);
//			    ByteArrayOutputStream out = new ByteArrayOutputStream(relatorio.length);
//			    out.write(relatorio, 0, relatorio.length);
//	
//			    httpServletResponse.setContentType("application/pdf");
//			    httpServletResponse.addHeader("Content-Disposition", "inline; filename=dailyOrdersReport.pdf");
//			    
//		        out.writeTo(os);
//		        os.flush();
//	        
//			}
//		} catch (Exception e) {
//			LOGGER.error("Erro no metodo exportListaCompra:", e);
//		} finally {
//			os.close();
//		}
//	}
}
