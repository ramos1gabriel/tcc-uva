package com.tcc.api.controller;

import java.util.List;
import java.util.Random;

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

import com.tcc.api.entity.Ingrediente;
import com.tcc.api.entity.Usuario;
import com.tcc.api.response.Response;
import com.tcc.api.security.jwt.JwtTokenUtil;
import com.tcc.api.service.IngredienteService;
import com.tcc.api.service.UsuarioService;

@RestController
@RequestMapping(value="/api/ingrediente")
@CrossOrigin(origins="*")
public class IngredienteController {
	
	@Autowired
	private IngredienteService ingredienteService;
	
	@Autowired
	protected JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	private UsuarioService usuarioService;
	
	@PostMapping()
//	@PreAuthorize("hasAnyRole('CUSTOMER')")
	public ResponseEntity<Response<Ingrediente>> create(HttpServletRequest request, @RequestBody Ingrediente ingrediente,
			BindingResult result) {
		
		Response<Ingrediente> response = new Response<Ingrediente>();
		
		try {
			validaIngredienteCriado(ingrediente, result);
			validaDuplicidade(ingrediente, result);
			
			if(result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			
			Ingrediente ingredientePersitido = (Ingrediente) ingredienteService.createOrUpdate(ingrediente);
			response.setData(ingredientePersitido);
		
		} catch (Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		
		return ResponseEntity.ok(response);
	}

	private void validaIngredienteCriado(Ingrediente ingrediente, BindingResult result) {
		if(ingrediente.getNome() == null) {
			result.addError(new ObjectError("Ticket", "Nome do ingrediente nao informado!"));
			return;
		}
	}
	
	private void validaDuplicidade(Ingrediente ingrediente, BindingResult result) {
		
		Ingrediente ingredientePesquisa = ingredienteService.findByNome(ingrediente.getNome());
		
		if(ingredientePesquisa != null) {
			result.addError(new ObjectError("Ingrediente", "Nome de ingrediente ja cadastrado!"));
		}
	}
	
	public Usuario userFromRequest(HttpServletRequest request) {
		String token = request.getHeader("Authorization"); //PEGA TOKEN DO HEADER
		String username = jwtTokenUtil.getUsernameToken(token);
		return usuarioService.findByUsername(username);
	}
	
	private Integer generateNumber() {
		Random random = new Random();
		return random.nextInt(9999);
	}
	
	@PutMapping()
//	@PreAuthorize("hasAnyRole('CUSTOMER')")
	public ResponseEntity<Response<Ingrediente>> update(HttpServletRequest request, @RequestBody Ingrediente ingrediente,
			BindingResult result) {
		
		Response<Ingrediente> response = new Response<Ingrediente>();
		
		try {
			validaIngredienteUpdate(ingrediente, result);
			if(result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			
			Ingrediente  ingredientePersistido = (Ingrediente) ingredienteService.createOrUpdate(ingrediente);
			response.setData(ingredientePersistido);
			
		} catch (Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		
		return ResponseEntity.ok(response);
	}
	
	private void validaIngredienteUpdate(Ingrediente ingrediente, BindingResult result) {
		if(ingrediente.getId() == null) {
			result.addError(new ObjectError("Ingrediente", "ID nao informado!"));
			return;
		}
		
		if(ingrediente.getNome() == null) {
			result.addError(new ObjectError("Ingrediente", "Ingrediente nao informado!"));
			return;
		}
	}
	
	@GetMapping(value = "{id}")
//	@PreAuthorize("hasAnyRole('CUSTOMER', 'TECHNICIAN')")
	public ResponseEntity<Response<Ingrediente>> findById(@PathVariable("id") Long id) {
		
		Response<Ingrediente> response = new Response<Ingrediente>();
		
		Ingrediente ingrediente = ingredienteService.findById(id);
		if(ingrediente == null) {
			response.getErrors().add("Registro nao encontrado id: "+id);
			return ResponseEntity.badRequest().body(response);
		}
		
		response.setData(ingrediente);
		
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping(value = "{id}")
//	@PreAuthorize("hasAnyRole('CUSTOMER')")
	public ResponseEntity<Response<String>> delete(@PathVariable("id") Long id) {
		
		Response<String> response = new Response<String>();
		
		Ingrediente ingrediente = ingredienteService.findById(id);
		
		if(ingrediente == null) {
			response.getErrors().add("Registro nao encontrado id: "+id);
			return ResponseEntity.badRequest().body(response);
		}
		
		ingredienteService.delete(id);
		
		return ResponseEntity.ok(new Response<String>());
	}
	
	@GetMapping(value = "{page}/{count}")
//	@PreAuthorize("hasAnyRole('CUSTOMER', 'TECHNICIAN')")
	public ResponseEntity<Response<Page<Ingrediente>>> findAll(HttpServletRequest request, @PathVariable int page, @PathVariable int count) {

		Response<Page<Ingrediente>> response = new Response<Page<Ingrediente>>();
		Page<Ingrediente> ingredientes = null;
		
		ingredientes = ingredienteService.findAll(page, count);
		
		if(ingredientes.isEmpty()) {
			response.getErrors().add("Nenhum registro encontrado");
			return ResponseEntity.badRequest().body(response);
		}
		
		response.setData(ingredientes);
		
		return ResponseEntity.ok(response);
	}
	
	
	@GetMapping(value = "{page}/{count}/{nome}")
	public ResponseEntity<Response<Page<Ingrediente>>> findByNome(HttpServletRequest request, @PathVariable("page") int page, 
			@PathVariable("count") int count, @PathVariable("nome") String nome) {
		
		Response<Page<Ingrediente>> response = new Response<Page<Ingrediente>>();
		Page<Ingrediente> ingredientes = null;
		
		ingredientes = ingredienteService.findByNomeIgnoreCaseContainingOrderByDesc(page, count, nome);
		
		if(ingredientes.isEmpty()) {
			response.getErrors().add("Nenhum registro encontrado com o nome: "+nome);
			return ResponseEntity.badRequest().body(response);
		}
		
		response.setData(ingredientes);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping()
	public ResponseEntity<Response<List<Ingrediente>>> findAll(HttpServletRequest request) {
		
		Response<List<Ingrediente>> response = new Response<List<Ingrediente>>();
		List<Ingrediente> ingredientes = null;
		
		ingredientes = ingredienteService.findAll();
		
		if(ingredientes.isEmpty()) {
			response.getErrors().add("Nenhum registro encontrado");
			return ResponseEntity.badRequest().body(response);
		}
		
		response.setData(ingredientes);
		
		return ResponseEntity.ok(response);
	}
	
	@GetMapping(value = "recing/{id}")
	public ResponseEntity<Response<List<String>>> findReceitaNomeInRecIng(HttpServletRequest request, @PathVariable("id") Long id) {
		
		Response<List<String>> response = new Response<List<String>>();
		List<String> nomes = null;
		
		nomes = ingredienteService.findReceitaNomeInRecIng(id);
		
		if(nomes.isEmpty()) {
			response.getErrors().add("Nenhum registro encontrado");
			return ResponseEntity.badRequest().body(response);
		}
		
		response.setData(nomes);
		
		return ResponseEntity.ok(response);
	}
}
