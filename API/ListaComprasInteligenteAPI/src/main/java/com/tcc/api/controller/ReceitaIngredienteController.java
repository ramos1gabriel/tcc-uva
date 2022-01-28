package com.tcc.api.controller;

import java.util.List;

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

import com.tcc.api.entity.ReceitaIngrediente;
import com.tcc.api.entity.Usuario;
import com.tcc.api.response.Response;
import com.tcc.api.security.jwt.JwtTokenUtil;
import com.tcc.api.service.ReceitaIngredienteService;
import com.tcc.api.service.UsuarioService;

@RestController
@RequestMapping(value="/api/recIng")
@CrossOrigin(origins="*")
public class ReceitaIngredienteController {
	
	private static final Logger LOG = LoggerFactory.getLogger(ReceitaIngredienteController.class);
	
	@Autowired
	private ReceitaIngredienteService recIngService;
	
	@Autowired
	protected JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	private UsuarioService usuarioService;
	
	@PostMapping()
	public ResponseEntity<Response<ReceitaIngrediente>> create(HttpServletRequest request, @RequestBody List<ReceitaIngrediente> listRecIng,
			BindingResult result) {
		
		LOG.info("Inicio create receitaingrediente...");
		Response<ReceitaIngrediente> response = new Response<ReceitaIngrediente>();
		
		try {
			validaCriacao(listRecIng, result);
			//validaDuplicidade(recIng, result); //nao tem duplicidade no java, tem apenas no front!!
			
			if(result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			
			List<ReceitaIngrediente> listRecIngPersitido = (List<ReceitaIngrediente>) recIngService.createOrUpdateAll(listRecIng);
			for (int i = 0; i < listRecIngPersitido.size(); i++) {
				response.getDatas().add(listRecIngPersitido.get(i));
			}
		
		} catch (Exception e) {
			LOG.error("Erro create receitaingrediente: {}", e.getMessage());
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		LOG.info("Fim create receitaingrediente...");
		
		return ResponseEntity.ok(response);
	}

	private void validaCriacao(List<ReceitaIngrediente> listRecIng, BindingResult result) {
		
		LOG.info("Validando create receitaingrediente...");
		listRecIng.forEach(recing -> {
			if(recing.getIngrediente().getId() == null) {
				result.addError(new ObjectError("ReceitaIngrediente", "Ingrediente nao informado!"));
				return;
			}
			if(recing.getReceita().getId() == null) {
				result.addError(new ObjectError("ReceitaIngrediente", "Receita nao informada!"));
				return;
			}
		});
	}
	
//	private void validaDuplicidade(ReceitaIngrediente recIng, BindingResult result) {
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
	public ResponseEntity<Response<ReceitaIngrediente>> update(HttpServletRequest request, @RequestBody List<ReceitaIngrediente> listRecIng,
			BindingResult result) {
		
		LOG.info("Inicio update receitaingrediente...");
		Response<ReceitaIngrediente> response = new Response<ReceitaIngrediente>();
		
		try {
			validaUpdate(listRecIng, result);
			if(result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			
			List<ReceitaIngrediente>  listRecIngPersitido = (List<ReceitaIngrediente>) recIngService.createOrUpdateAll(listRecIng);
			for (int i = 0; i < listRecIngPersitido.size(); i++) {
				response.getDatas().add(listRecIngPersitido.get(i));
			}
			
		} catch (Exception e) {
			LOG.error("Erro update receitaingrediente: {}", e.getMessage());
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		LOG.info("Fim update receitaingrediente...");
		
		return ResponseEntity.ok(response);
	}
	
	private void validaUpdate(List<ReceitaIngrediente> listRecIng, BindingResult result) {
		
		LOG.info("Validando update receitaingrediente...");
		listRecIng.forEach(recing -> {
			if(recing.getIngrediente().getId() == null) {
				result.addError(new ObjectError("ReceitaIngrediente", "Ingrediente nao informado!"));
				return;
			}
			if(recing.getReceita().getId() == null) {
				result.addError(new ObjectError("ReceitaIngrediente", "Receita nao informada!"));
				return;
			}
		});
	}
	
	@GetMapping(value = "{id}")
	public ResponseEntity<Response<ReceitaIngrediente>> findById(@PathVariable("id") Long id) {
		
		LOG.info("Inicio findById receitaingrediente...");
		Response<ReceitaIngrediente> response = new Response<ReceitaIngrediente>();
		ReceitaIngrediente recIng = recIngService.findById(id);
		
		if(recIng == null) {
			response.getErrors().add("Registro nao encontrado id: "+id);
			return ResponseEntity.badRequest().body(response);
		}
		LOG.info("Fim findById receitaingrediente...");
		
		response.setData(recIng);
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping(value = "{id}")
	public ResponseEntity<Response<String>> delete(@PathVariable("id") Long id) {
		
		LOG.info("Inicio delete receitaingrediente...");
		Response<String> response = new Response<String>();
		ReceitaIngrediente recIng = recIngService.findById(id);
		
		if(recIng == null) {
			response.getErrors().add("Registro nao encontrado id: "+id);
			return ResponseEntity.badRequest().body(response);
		}
		
		recIngService.delete(id);
		LOG.info("Fim delete receitaingrediente...");
		
		return ResponseEntity.ok(new Response<String>());
	}
	
	@GetMapping(value = "{page}/{count}")
	public ResponseEntity<Response<Page<ReceitaIngrediente>>> findAll(HttpServletRequest request, @PathVariable int page, @PathVariable int count) {

		LOG.info("Inicio findAll receitaingrediente...");
		Response<Page<ReceitaIngrediente>> response = new Response<Page<ReceitaIngrediente>>();
		Page<ReceitaIngrediente> recIngs = null;
		
		recIngs = recIngService.findAll(page, count);
		
		if(recIngs.isEmpty()) {
			LOG.info("Nenhum registro encontrado");
			response.getErrors().add("Nenhum registro encontrado");
			return ResponseEntity.badRequest().body(response);
		}
		LOG.info("Fim findAll receitaingrediente...");
		
		response.setData(recIngs);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping(value = "findByReceitaId/{id}")
	public ResponseEntity<Response<ReceitaIngrediente>> findByReceitaId(@PathVariable("id") Long id) {
		
		LOG.info("Inicio findByReceitaId receitaingrediente...");
		Response<ReceitaIngrediente> response = new Response<ReceitaIngrediente>();
		List<ReceitaIngrediente> recings = recIngService.findByReceitaId(id);
		
		if(recings.isEmpty()) {
			LOG.info("Registros nao encontrado para o receita id: {}", id);
			response.getErrors().add("Registros nao encontrado para o receita id: "+id);
			return ResponseEntity.badRequest().body(response);
		}
		
		for (int i = 0; i < recings.size(); i++) {
			response.getDatas().add(recings.get(i));
		}
		LOG.info("Fim findByReceitaId receitaingrediente...");
		
		return ResponseEntity.ok(response);
	}
}
