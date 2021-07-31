package com.tcc.api.controller;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.math.BigDecimal;
import java.net.URL;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Predicate;
import java.util.stream.Collectors;

//import javax.measure.MetricPrefix;
//import javax.measure.Quantity;
//import javax.measure.Unit;
//import javax.measure.quantity.Mass;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.hateoas.PagedResources;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tcc.api.entity.CardapioSemanal;
import com.tcc.api.entity.ListaCompra;
import com.tcc.api.entity.ReceitaIngrediente;
import com.tcc.api.entity.Usuario;
import com.tcc.api.enums.UnidadeMedidaEnum;
import com.tcc.api.response.Response;
import com.tcc.api.security.jwt.JwtTokenUtil;
import com.tcc.api.service.CardapioSemanalService;
import com.tcc.api.service.JasperService;
import com.tcc.api.service.ListaCompraService;
import com.tcc.api.service.ReceitaIngredienteService;
import com.tcc.api.service.UsuarioService;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JRExporterParameter;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.design.JasperDesign;
import net.sf.jasperreports.engine.export.JRPdfExporter;
import net.sf.jasperreports.engine.xml.JRXmlLoader;

//import tec.units.ri.quantity.Quantities;
//import tec.units.ri.unit.Units;


@RestController
@RequestMapping(value="/api/lista")
@CrossOrigin(origins="*")
public class ListaCompraController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(ListaCompraController.class);
	
	@Autowired
	private ListaCompraService listacompraService;
	
	@Autowired
	protected JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	private UsuarioService usuarioService;
	
	//@Autowired
	//private ReceitaService receitaService;
	
	//@Autowired
	//private IngredienteService ingredienteService;
	
	@Autowired
	private ReceitaIngredienteService recingService;
	
	@Autowired
	private CardapioSemanalService cardapioService;
	
	@Autowired
    private DataSource dataSource;
	
	@Autowired 
	private HttpServletResponse response;
	
	@Autowired
    private JasperService jasperService;
	
	private final String REGEX_NUMBER = "[^0-9.]";
	
	//um get q recebe o id do cardapio
	//da um findall pelo id do cardapio
	//nao retornou nada: CREATE, retornou: UPDATE
	
	//HTML
	@GetMapping(value = "gerarLista/{id}")
	public ResponseEntity<Response<ListaCompra>> gerarLista(@PathVariable("id") Long id) {
		
		Response<ListaCompra> response = new Response<ListaCompra>();
		
		List<ListaCompra> listaCompra = montaLista(id); //gerar a lista
		
		if(listaCompra.isEmpty()) {
			response.getErrors().add("Nao foi possivel gerar lista para cardapio id: "+id);
			return ResponseEntity.badRequest().body(response);
		}
		
		for (int i = 0; i < listaCompra.size(); i++) { //transformar em lambda
			response.getDatas().add(listaCompra.get(i));
		}
		
		return ResponseEntity.ok(response);
	}
	
	//JASPER
	@PostMapping(value = "/gerar/{id}")
	public void exportListaCompra(@PathVariable("id") Long id, HttpServletResponse httpServletResponse) throws IOException, JRException {
		
		OutputStream os = httpServletResponse.getOutputStream();
		
		try {
			
			List<ListaCompra> listaCompra = montaLista(id); //gerar a lista
			
			if(!listaCompra.isEmpty()) {
			
				Connection connection = dataSource.getConnection();
				LOGGER.info("exportListaCompra() - acessando conexao com bd");
				
				InputStream logo = this.getClass().getResourceAsStream("/jasper/img/logo.png");
				//File logoFile = new File(this.getClass().getClassLoader().getResource("jasper/img/logo.png").getPath());
				//String logo = logoFile.getPath();
				
				Map parametros = new HashMap(); 
			    parametros.put("ID", id.intValue());
			    parametros.put("logo", logo);
			    String nomeRelatorio = "listacompra";
			    //LOGGER.info("exportListaCompra() - id="+id+"\nlogo="+logo+"\nrelatorio="+nomeRelatorio);
				
			    byte[] relatorio = jasperService.gerarPDF(connection, nomeRelatorio, parametros);
			    ByteArrayOutputStream out = new ByteArrayOutputStream(relatorio.length);
			    out.write(relatorio, 0, relatorio.length);
	
			    httpServletResponse.setContentType("application/pdf");
			    httpServletResponse.addHeader("Content-Disposition", "inline; filename=dailyOrdersReport.pdf");
			    
		        out.writeTo(os);
		        os.flush();
	        
			}
		} catch (Exception e) {
			LOGGER.error("Erro no metodo exportListaCompra:", e);
		} finally {
			os.close();
		}
	}
	
	//MONTA LISTA COMPRA
	private List<ListaCompra> montaLista(Long id) {
		
		//busca listcompra por id
		List<ListaCompra> listas = listacompraService.findAllByCardapio(id);
		
		//se existir limpa tabela
		if(!listas.isEmpty()) {
			listacompraService.deleteByCardapioId(id);
			listas.clear();
		}
		
		//pega o cardapio
		CardapioSemanal cardapio = cardapioService.findById(id);
		
		//pega todos id das receitas do cardapio
		List<Long> listaRefeicoes = cardapio.getRefeicoes();
		
		//recupera todos ingredienteXreceita utilizados no cardapio
		List<ReceitaIngrediente> listaIngredientes = new ArrayList<ReceitaIngrediente>();
		
		for (Long idRec : listaRefeicoes) {
			if(idRec > 0) {
				recingService.findByReceitaId(idRec).forEach(recing -> listaIngredientes.add(recing));
			}
		}
		
		//AGRUPAR = https://emmanuelneri.com.br/2017/06/20/transformando-collections-em-map-stream-do-java-8/
		//CONVERSAO UNIDADES DE MEDIDA = https://www.baeldung.com/javax-measure
		
		//agrupa ingredientes pelo id
		Map<Long, List<ReceitaIngrediente>> ingredienteAgrupado = listaIngredientes.stream().collect(Collectors.groupingBy(ReceitaIngrediente::getIngredienteId));
		
		Map<String, String> listaAux = new HashMap<String, String>();
		
		for (Long valor : ingredienteAgrupado.keySet()) {
			List<ReceitaIngrediente> lista = ingredienteAgrupado.get(valor);
			
			String ingrediente = "";
			String unidadeMedida = "";
			BigDecimal qtdeTotal = BigDecimal.ZERO;
			
			//mudar para lambda
			for (ReceitaIngrediente rc : lista) {
				//qtdeTotal += rc.getQuantidade();
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
			lc.setCardapio(cardapio);
			listas.add(lc);
		}
		
		return listacompraService.saveAll(listas);
	}
	
	private String tratarUnidadeMedida(String unidade) {
		
		/*
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
		 */
		BigDecimal unidadeMedida = new BigDecimal(unidade.replaceAll(REGEX_NUMBER, ""));
		String uniMed = "";
		
		if(unidade.contains("XCR")) { //250ml
			uniMed = unidadeMedida.multiply(new BigDecimal(250)).toString() + "ml";
			//Quantity<Volume> l6 = Quantities.getQuantity(6, Units.LITRE);
		} else if(unidade.contains("COL")) {//15ml
			uniMed = unidadeMedida.multiply(new BigDecimal(15)).toString() + "ml";
		} else if(unidade.contains("KG")) {
			uniMed = unidadeMedida.toString() + "kg";
		} else if(unidade.contains("G")) {
			//Quantity<Mass> kg = Quantities.getQuantity(unidadeMedida, Units.KILOGRAM);
			
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
			uniMed = unidadeMedida.toString() + "litros";
		} else if(unidade.contains("ML")) {
			if(unidadeMedida.compareTo(new BigDecimal(1000)) >= 0) {
				unidadeMedida = unidadeMedida.divide(new BigDecimal(1000));
				uniMed = unidadeMedida.toString() +" litros";
			} else {
				uniMed = unidadeMedida.toString() +" ml";
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
		
		return uniMed.replace(".", ",");
	}
	
	public Usuario userFromRequest(HttpServletRequest request) {
		String token = request.getHeader("Authorization"); //PEGA TOKEN DO HEADER
		String username = jwtTokenUtil.getUsernameToken(token);
		return usuarioService.findByUsername(username);
	}
	
//	@PutMapping()
//	public ResponseEntity<Response<ReceitaIngrediente>> update(HttpServletRequest request, @RequestBody List<ReceitaIngrediente> listRecIng,
//			BindingResult result) {
//		
//		Response<ReceitaIngrediente> response = new Response<ReceitaIngrediente>();
//		
//		try {
//			validaUpdate(listRecIng, result);
//			if(result.hasErrors()) {
//				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
//				return ResponseEntity.badRequest().body(response);
//			}
//			
//			List<ReceitaIngrediente>  listRecIngPersitido = (List<ReceitaIngrediente>) recIngService.createOrUpdateAll(listRecIng);
//			for (int i = 0; i < listRecIngPersitido.size(); i++) {
//				response.getDatas().add(listRecIngPersitido.get(i));
//			}
//			
//		} catch (Exception e) {
//			response.getErrors().add(e.getMessage());
//			return ResponseEntity.badRequest().body(response);
//		}
//		
//		return ResponseEntity.ok(response);
//	}
//	
//	private void validaUpdate(List<ReceitaIngrediente> listRecIng, BindingResult result) {
//		listRecIng.forEach(recing -> {
//			/*if(recing.getId() == null) {
//				result.addError(new ObjectError("ReceitaIngrediente", "ID nao informado!"));
//				return;
//			}*/
//			if(recing.getIngrediente().getId() == null) {
//				result.addError(new ObjectError("ReceitaIngrediente", "Ingrediente nao informado!"));
//				return;
//			}
//			if(recing.getReceita().getId() == null) {
//				result.addError(new ObjectError("ReceitaIngrediente", "Receita nao informada!"));
//				return;
//			}
//		});
//	}
//	
//	@GetMapping(value = "{id}")
//	public ResponseEntity<Response<ReceitaIngrediente>> findById(@PathVariable("id") Long id) {
//		
//		Response<ReceitaIngrediente> response = new Response<ReceitaIngrediente>();
//		
//		ReceitaIngrediente recIng = recIngService.findById(id);
//		if(recIng == null) {
//			response.getErrors().add("Registro nao encontrado id: "+id);
//			return ResponseEntity.badRequest().body(response);
//		}
//		
////		List<ChangeStatus> changes = new ArrayList<ChangeStatus>();
////		Iterable<ChangeStatus> changesCurrent = ticketService.listChangeStatus(ticket.getId());
////		for (Iterator<ChangeStatus> iterator = changesCurrent.iterator(); iterator.hasNext();) {
////			ChangeStatus changeStatus = (ChangeStatus) iterator.next();
////			changeStatus.setTicket(null);
////			changes.add(changeStatus);
////		}
////		
////		ticket.setChanges(changes);
//		response.setData(recIng);
//		
//		return ResponseEntity.ok(response);
//	}
//	
//	@DeleteMapping(value = "{id}")
//	public ResponseEntity<Response<String>> delete(@PathVariable("id") Long id) {
//		
//		Response<String> response = new Response<String>();
//		
//		ReceitaIngrediente recIng = recIngService.findById(id);
//		
//		if(recIng == null) {
//			response.getErrors().add("Registro nao encontrado id: "+id);
//			return ResponseEntity.badRequest().body(response);
//		}
//		
//		recIngService.delete(id);
//		
//		return ResponseEntity.ok(new Response<String>());
//	}
//	
//	@GetMapping(value = "{page}/{count}")
//	public ResponseEntity<Response<Page<ReceitaIngrediente>>> findAll(HttpServletRequest request, @PathVariable int page, @PathVariable int count) {
//
//		Response<Page<ReceitaIngrediente>> response = new Response<Page<ReceitaIngrediente>>();
//		Page<ReceitaIngrediente> recIngs = null;
//		
//		recIngs = recIngService.findAll(page, count);
//		
//		if(recIngs.isEmpty()) {
//			response.getErrors().add("Nenhum registro encontrado");
//			return ResponseEntity.badRequest().body(response);
//		}
//		
//		response.setData(recIngs);
//		
//		return ResponseEntity.ok(response);
//	}
//	
//	@GetMapping(value = "findByReceitaId/{id}")
//	public ResponseEntity<Response<ReceitaIngrediente>> findByReceitaId(@PathVariable("id") Long id) {
//		
//		Response<ReceitaIngrediente> response = new Response<ReceitaIngrediente>();
//		
//		List<ReceitaIngrediente> recings = recIngService.findByReceitaId(id);
//		
//		if(recings.isEmpty()) {
//			response.getErrors().add("Registros nao encontrado para o receita id: "+id);
//			return ResponseEntity.badRequest().body(response);
//		}
//		
//		for (int i = 0; i < recings.size(); i++) {
//			response.getDatas().add(recings.get(i));
//		}
//		
//		return ResponseEntity.ok(response);
//	}
}
