package com.tcc.api.controller;

import java.util.List;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
	
	private static final Logger LOG = LoggerFactory.getLogger(IngredienteController.class);
	
	@Autowired
	private IngredienteService ingredienteService;
	
	@Autowired
	protected JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	private UsuarioService usuarioService;
	
	@PostMapping()
	public ResponseEntity<Response<Ingrediente>> create(HttpServletRequest request, @RequestBody Ingrediente ingrediente,
			BindingResult result) {
		
		LOG.info("Inicio create ingrediente...");
		Response<Ingrediente> response = new Response<Ingrediente>();
		
		try {
			validaIngredienteCriado(ingrediente, result);
			validaDuplicidade(ingrediente, result);
			
			ingrediente.setNome(ingrediente.getNome().trim()); //evitar unique
			
			if(result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			
			Ingrediente ingredientePersitido = (Ingrediente) ingredienteService.createOrUpdate(ingrediente);
			response.setData(ingredientePersitido);
		
		} catch (Exception e) {
			if(e.getMessage().contains("NonUniqueResultException")) {
				LOG.error("Erro unique ingrediente");
				response.getErrors().add("Nome de ingrediente ja cadastrado!");
				return ResponseEntity.badRequest().body(response);
			} else {
				LOG.error("Erro create ingrediente: {}", e.getMessage());
				response.getErrors().add(e.getMessage());
				return ResponseEntity.badRequest().body(response);
			}
		}
		LOG.info("Fim create ingrediente...");
		
		return ResponseEntity.ok(response);
	}

	private void validaIngredienteCriado(Ingrediente ingrediente, BindingResult result) {
		
		LOG.info("Validando create ingrediente...");
		if(ingrediente.getNome() == null) {
			result.addError(new ObjectError("Ingrediente", "Nome do ingrediente nao informado!"));
			return;
		}
	}
	
	private void validaDuplicidade(Ingrediente ingrediente, BindingResult result) {
		
		LOG.info("Validando duplicidade ingrediente...");
		Ingrediente ingredientePesquisa = ingredienteService.findByNome(ingrediente.getNome().trim());
		
		if(ingredientePesquisa != null) {
			result.addError(new ObjectError("Ingrediente", "Nome de ingrediente ja cadastrado!"));
		}
	}
	
	public Usuario userFromRequest(HttpServletRequest request) {
		String token = request.getHeader("Authorization"); //PEGA TOKEN DO HEADER
		String username = jwtTokenUtil.getUsernameToken(token);
		return usuarioService.findByUsername(username);
	}
	
	@PutMapping()
	public ResponseEntity<Response<Ingrediente>> update(HttpServletRequest request, @RequestBody Ingrediente ingrediente,
			BindingResult result) {
		
		LOG.info("Inicio update ingrediente...");
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
			LOG.info("Erro update ingrediente: {}", e.getMessage());
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		LOG.info("Fim update ingrediente...");
		
		return ResponseEntity.ok(response);
	}
	
	private void validaIngredienteUpdate(Ingrediente ingrediente, BindingResult result) {
		
		LOG.info("Validando update ingrediente...");
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
	public ResponseEntity<Response<Ingrediente>> findById(@PathVariable("id") Long id) {
		
		LOG.info("Inicio findById ingrediente...");
		Response<Ingrediente> response = new Response<Ingrediente>();
		
		Ingrediente ingrediente = ingredienteService.findById(id);
		if(ingrediente == null) {
			LOG.info("Registro nao encontrado id: {}", id);
			response.getErrors().add("Registro nao encontrado id: "+id);
			return ResponseEntity.badRequest().body(response);
		}
		LOG.info("Fim findById ingrediente...");
		
		response.setData(ingrediente);
		
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping(value = "{id}")
	public ResponseEntity<Response<String>> delete(@PathVariable("id") Long id) {
		
		LOG.info("Inicio delete ingrediente...");
		Response<String> response = new Response<String>();
		
		Ingrediente ingrediente = ingredienteService.findById(id);
		
		if(ingrediente == null) {
			LOG.info("Registro nao encontrado id: {}", id);
			response.getErrors().add("Registro nao encontrado id: "+id);
			return ResponseEntity.badRequest().body(response);
		}
		
		ingredienteService.delete(id);
		LOG.info("Fim delete ingrediente...");
		
		return ResponseEntity.ok(new Response<String>());
	}
	
	@GetMapping(value = "{page}/{count}")
	public ResponseEntity<Response<Page<Ingrediente>>> findAll(HttpServletRequest request, @PathVariable int page, @PathVariable int count) {

		LOG.info("Inicio findAll ingrediente...");
		Response<Page<Ingrediente>> response = new Response<Page<Ingrediente>>();
		Page<Ingrediente> ingredientes = null;
		
		ingredientes = ingredienteService.findAll(page, count);
		
		if(ingredientes.isEmpty()) {
			LOG.info("Nenhum registro encontrado");
			response.getErrors().add("Nenhum registro encontrado");
			return ResponseEntity.badRequest().body(response);
		}
		LOG.info("Fim findAll ingrediente...");
		
		response.setData(ingredientes);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping(value = "{page}/{count}/{nome}")
	public ResponseEntity<Response<Page<Ingrediente>>> findByNome(HttpServletRequest request, @PathVariable("page") int page, 
			@PathVariable("count") int count, @PathVariable("nome") String nome) {
		
		LOG.info("Inicio findByNome ingrediente...");
		Response<Page<Ingrediente>> response = new Response<Page<Ingrediente>>();
		Page<Ingrediente> ingredientes = null;
		
		ingredientes = ingredienteService.findByNomeIgnoreCaseContainingOrderByDesc(page, count, nome);
		
		if(ingredientes.isEmpty()) {
			response.getErrors().add("Nenhum registro encontrado com o nome: "+nome);
			return ResponseEntity.badRequest().body(response);
		}
		LOG.info("Fim findByNome ingrediente...");
		
		response.setData(ingredientes);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping()
	public ResponseEntity<Response<List<Ingrediente>>> findAll(HttpServletRequest request) {
		
		LOG.info("Inicio findAll ingrediente...");
		Response<List<Ingrediente>> response = new Response<List<Ingrediente>>();
		List<Ingrediente> ingredientes = null;
		
		ingredientes = ingredienteService.findAll();
		
		if(ingredientes.isEmpty()) {
			LOG.info("Nenhum registro encontrado");
			response.getErrors().add("Nenhum registro encontrado");
			return ResponseEntity.badRequest().body(response);
		}
		LOG.info("Fim findAll ingrediente...");
		
		response.setData(ingredientes);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping(value = "recing/{id}")
	public ResponseEntity<Response<List<String>>> findReceitaNomeInRecIng(HttpServletRequest request, @PathVariable("id") Long id) {
		
		LOG.info("Inicio findReceitaNomeInRecIng ingrediente...");
		Response<List<String>> response = new Response<List<String>>();
		List<String> nomes = null;
		
		nomes = ingredienteService.findReceitaNomeInRecIng(id);
		
		if(nomes.isEmpty()) {
			LOG.info("Nenhum registro encontrado");
			response.getErrors().add("Nenhum registro encontrado");
			return ResponseEntity.badRequest().body(response);
		}
		LOG.info("Fim findReceitaNomeInRecIng ingrediente...");
		
		response.setData(nomes);
		return ResponseEntity.ok(response);
	}
}
