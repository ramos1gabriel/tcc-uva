package com.tcc.api.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tcc.api.entity.ReceitaIngredientes;
import com.tcc.api.entity.Usuario;
import com.tcc.api.response.Response;
import com.tcc.api.security.jwt.JwtTokenUtil;
import com.tcc.api.service.ReceitaIngredienteService;
import com.tcc.api.service.UsuarioService;

@RestController
@RequestMapping(value="/api/recIng")
@CrossOrigin(origins="*")
public class ReceitaIngredienteController {
	
	@Autowired
	private ReceitaIngredienteService recIngService;
	
	@Autowired
	protected JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	private UsuarioService usuarioService;
	
	@PostMapping()
	public ResponseEntity<Response<ReceitaIngredientes>> create(HttpServletRequest request, @RequestBody ReceitaIngredientes recIng,
			BindingResult result) {
		
		Response<ReceitaIngredientes> response = new Response<ReceitaIngredientes>();
		
		try {
			validaCriacao(recIng, result);
			//validaDuplicidade(recIng, result); //NAO TEM DUPLICIDADE NO JAVA, TEM APENAS NO FRONT!!
			
			if(result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			
			//CREATE
			//receita.setCategoria(CategoriaEnum);
			
			
			ReceitaIngredientes recIngPersitido = (ReceitaIngredientes) recIngService.createOrUpdate(recIng);
			response.setData(recIngPersitido);
		
		} catch (Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		
		return ResponseEntity.ok(response);
	}

	private void validaCriacao(ReceitaIngredientes recIng, BindingResult result) {
		if(recIng.getIngrediente().getId() == null) {
			result.addError(new ObjectError("ReceitaIngredientes", "Ingrediente nao informado!"));
			return;
		}
		if(recIng.getReceita().getId() == null) {
			result.addError(new ObjectError("ReceitaIngredientes", "Receita nao informada!"));
			return;
		}
	}
	
//	private void validaDuplicidade(ReceitaIngredientes recIng, BindingResult result) {
//		
//		Receita receitaPesquisa = recIngService.findByNome(recIng.getNome());
//		
//		if(receitaPesquisa != null) {
//			result.addError(new ObjectError("Ingrediente", "Receita ja cadastrada!"));
//		}
//	}
	
	public Usuario userFromRequest(HttpServletRequest request) {
		String token = request.getHeader("Authorization"); //PEGA TOKEN DO HEADER
		String username = jwtTokenUtil.getUsernameToken(token);
		return usuarioService.findByUsername(username);
	}
	
	@PutMapping()
	public ResponseEntity<Response<ReceitaIngredientes>> update(HttpServletRequest request, @RequestBody ReceitaIngredientes recIng,
			BindingResult result) {
		
		Response<ReceitaIngredientes> response = new Response<ReceitaIngredientes>();
		
		try {
			validaUpdate(recIng, result);
			if(result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			
			ReceitaIngredientes  recIngPersistido = (ReceitaIngredientes) recIngService.createOrUpdate(recIng);
			response.setData(recIngPersistido);
			
		} catch (Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		
		return ResponseEntity.ok(response);
	}
	
	private void validaUpdate(ReceitaIngredientes recIng, BindingResult result) {
		if(recIng.getId() == null) {
			result.addError(new ObjectError("ReceitaIngredientes", "ID nao informado!"));
			return;
		}
		
		if(recIng.getIngrediente().getId() == null) {
			result.addError(new ObjectError("ReceitaIngredientes", "Ingrediente nao informado!"));
			return;
		}
		if(recIng.getReceita().getId() == null) {
			result.addError(new ObjectError("ReceitaIngredientes", "Receita nao informada!"));
			return;
		}
	}
	
	@GetMapping(value = "{id}")
	public ResponseEntity<Response<ReceitaIngredientes>> findById(@PathVariable("id") Long id) {
		
		Response<ReceitaIngredientes> response = new Response<ReceitaIngredientes>();
		
		ReceitaIngredientes recIng = recIngService.findById(id);
		if(recIng == null) {
			response.getErrors().add("Registro nao encontrado id: "+id);
			return ResponseEntity.badRequest().body(response);
		}
		
//		List<ChangeStatus> changes = new ArrayList<ChangeStatus>();
//		Iterable<ChangeStatus> changesCurrent = ticketService.listChangeStatus(ticket.getId());
//		for (Iterator<ChangeStatus> iterator = changesCurrent.iterator(); iterator.hasNext();) {
//			ChangeStatus changeStatus = (ChangeStatus) iterator.next();
//			changeStatus.setTicket(null);
//			changes.add(changeStatus);
//		}
//		
//		ticket.setChanges(changes);
		response.setData(recIng);
		
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping(value = "{id}")
	public ResponseEntity<Response<String>> delete(@PathVariable("id") Long id) {
		
		Response<String> response = new Response<String>();
		
		ReceitaIngredientes recIng = recIngService.findById(id);
		
		if(recIng == null) {
			response.getErrors().add("Registro nao encontrado id: "+id);
			return ResponseEntity.badRequest().body(response);
		}
		
		recIngService.delete(id);
		
		return ResponseEntity.ok(new Response<String>());
	}
	
	@GetMapping(value = "{page}/{count}")
	public ResponseEntity<Response<Page<ReceitaIngredientes>>> findAll(HttpServletRequest request, @PathVariable int page, @PathVariable int count) {

		Response<Page<ReceitaIngredientes>> response = new Response<Page<ReceitaIngredientes>>();
		Page<ReceitaIngredientes> recIngs = null;
		
//		Usuario userRequest = userFromRequest(request);
//		if(userRequest.getProfile().equals(ProfileEnum.ROLE_TECHNICIAN)) {
//			tickets = ticketService.listTicket(page, count);
//		}
//		if(userRequest.getProfile().equals(ProfileEnum.ROLE_CUSTOMER)) {
//			tickets = ticketService.findByCurrentUser(page, count, userRequest.getId());
//		}
		
		recIngs = recIngService.findAll(page, count);
		
		if(recIngs.isEmpty()) {
			response.getErrors().add("Nenhum registro encontrado");
			return ResponseEntity.badRequest().body(response);
		}
		
		response.setData(recIngs);
		
		return ResponseEntity.ok(response);
	}
}
