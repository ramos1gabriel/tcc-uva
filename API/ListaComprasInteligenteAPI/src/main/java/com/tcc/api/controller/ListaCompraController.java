package com.tcc.api.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.measure.MetricPrefix;
import javax.measure.Unit;
import javax.measure.quantity.Mass;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tcc.api.entity.CardapioSemanal;
import com.tcc.api.entity.Ingrediente;
import com.tcc.api.entity.ListaCompra;
import com.tcc.api.entity.ReceitaIngrediente;
import com.tcc.api.entity.Usuario;
import com.tcc.api.enums.UnidadeMedidaEnum;
import com.tcc.api.response.Response;
import com.tcc.api.security.jwt.JwtTokenUtil;
import com.tcc.api.service.CardapioSemanalService;
import com.tcc.api.service.IngredienteService;
import com.tcc.api.service.ListaCompraService;
import com.tcc.api.service.ReceitaIngredienteService;
import com.tcc.api.service.ReceitaService;
import com.tcc.api.service.UsuarioService;

@RestController
@RequestMapping(value="/api/lista")
@CrossOrigin(origins="*")
public class ListaCompraController {
	
	@Autowired
	private ListaCompraService listacompraService;
	
	@Autowired
	protected JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	private UsuarioService usuarioService;
	
	//
	@Autowired
	private ReceitaService receitaService;
	
	@Autowired
	private IngredienteService ingredienteService;
	
	@Autowired
	private ReceitaIngredienteService recingService;
	
	@Autowired
	private CardapioSemanalService cardapioService;
	
	//um get q recebe o id do cardapio
	//da um findall pelo id do cardapio
	//nao retornou nada: CREATE, retornou: UPDATE
	
	@GetMapping(value = "gerar/{id}")
	public ResponseEntity<Response<Boolean>> gerarListaCompra(@PathVariable("id") Long id) {
		
		Response<Boolean> response = new Response<Boolean>();
		
		List<ListaCompra> listas = listacompraService.findAllByCardapio(id);
		
		if(listas.isEmpty()) {
			//response.getErrors().add("Nenhum registro encontrado");
			//return ResponseEntity.badRequest().body(response);
//			create(cardapio);
			montaLista(id);
		} else {
			//update(cardapio);
		}
		
		response.setData(true);
		
		return ResponseEntity.ok(response);
	}
	
	//@PostMapping()
//	private void create(CardapioSemanal cardapio) {
//		
//		
//		List<ListaCompra> listListaCompraPersitido = (List<ListaCompra>) listacompraService.saveAll(listListaCompra);
//	}
	
	//MONTA LISTA COMPRA
	private List<ListaCompra> montaLista(Long id) {
		List<ListaCompra> listas = new ArrayList<ListaCompra>();
		
		//pega refeicoes do cardapio
		CardapioSemanal cardapio = cardapioService.findById(id);
		List<Long> listaRefeicoes = cardapio.getRefeicoes();
		
		//pega QTD | UNIDADE MEDIDA | INGREDIENTE
		List<ReceitaIngrediente> listaIngredientes = new ArrayList<ReceitaIngrediente>();
		
		for (Long idRec : listaRefeicoes) {
			if(idRec > 0) {
				recingService.findByReceitaId(idRec).forEach(recing -> listaIngredientes.add(recing));
			}
		}
		
		//AGRUPAR = https://emmanuelneri.com.br/2017/06/20/transformando-collections-em-map-stream-do-java-8/
		//CONVERSAO UNIDADES DE MEDIDA = https://www.baeldung.com/javax-measure
		//agrupa ingredientes
		Map<Long, List<ReceitaIngrediente>> ingredienteAgrupado = listaIngredientes.stream().collect(Collectors.groupingBy(ReceitaIngrediente::getIngredienteId));
		
		for (List<ReceitaIngrediente> valor : ingredienteAgrupado.values()) { 
		     System.out.println(valor); 
		}
		
		return listas;
	}
	
	private String trataEnum(UnidadeMedidaEnum unidade) {
		
		
		
		switch(unidade) {
			case XCR:
				return "XCR";
			case COL:
				return "COL";
			case K:
				return "K";
			case KG:
				return "KG";
			case G:
				return" G";
			case MG:
				return" MG";
			case L:
				return "L";
			case ML:
				return "ML";
			case M:
				return "M";
			case CM:
				return "CM";
			case MM:
				return "MM";
			default:
				return "UNI";
		}
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
////		Usuario userRequest = userFromRequest(request);
////		if(userRequest.getProfile().equals(ProfileEnum.ROLE_TECHNICIAN)) {
////			tickets = ticketService.listTicket(page, count);
////		}
////		if(userRequest.getProfile().equals(ProfileEnum.ROLE_CUSTOMER)) {
////			tickets = ticketService.findByCurrentUser(page, count, userRequest.getId());
////		}
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
