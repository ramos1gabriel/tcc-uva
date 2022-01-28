package com.tcc.api.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
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

import com.tcc.api.entity.Usuario;
import com.tcc.api.response.Response;
import com.tcc.api.service.UsuarioService;

@RestController
@RequestMapping("/api/usuario")
@CrossOrigin(origins="*")
public class UsuarioController {
	
	private static final Logger LOG = LoggerFactory.getLogger(ListaCompraController.class);
	
	@Autowired
	private UsuarioService usuarioService;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@PostMapping
	public ResponseEntity<Response<Usuario>> create(HttpServletRequest request, @RequestBody Usuario usuario,
			BindingResult result) {
		
		LOG.info("Inicio create usuario...");
		Response<Usuario> response = new Response<Usuario>();
		
		try {
			validaUsuarioCriado(usuario, result);
			validaDuplicidade(usuario, result);
			
			if(result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			
			usuario.setImagem(1);
			
			usuario.setSenha(passwordEncoder.encode(usuario.getSenha())); //CRIPTOGRAFAR SENHA
			usuario.setUsername(usuario.getUsername().toLowerCase());
			
			Usuario userPersisted = (Usuario) usuarioService.createOrUpdate(usuario);
			response.setData(userPersisted);
		
		} catch (DuplicateKeyException de) {
			LOG.error("Usuario ja registrado!");
			response.getErrors().add("Usuario ja registrado!");
			return ResponseEntity.badRequest().body(response);
		} catch (Exception e) {
			LOG.error("Erro create usuario: {}", e.getMessage());
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		LOG.info("Fim create usuario...");
		
		return ResponseEntity.ok(response);
	}
	
	private void validaUsuarioCriado(Usuario usuario, BindingResult result) {
		
		LOG.info("Validando create usuario...");
		if(usuario.getUsername() == null) {
			result.addError(new ObjectError("Usuario", "Nome de usuario nao informado!"));
		}
	}
	
	private void validaDuplicidade(Usuario usuario, BindingResult result) {
		
		LOG.info("Validando duplicidade usuario...");
		Usuario usuarioPesquisa = usuarioService.findByUsername(usuario.getUsername());
		
		if(usuarioPesquisa != null) {
			LOG.info("Nome de usuario ja cadastrado!");
			result.addError(new ObjectError("Usuario", "Nome de usuario ja cadastrado!"));
		}
	}
	
	@PutMapping
	public ResponseEntity<Response<Usuario>> update(HttpServletRequest request, @RequestBody Usuario usuario,
	BindingResult result) {
		
		LOG.info("Inicio update usuario...");
		Response<Usuario> response = new Response<Usuario>();
		
		try {
			validaUsuarioUpdate(usuario, result);
			if(result.hasErrors()) {
				List<ObjectError> listErros = new ArrayList<ObjectError>();
				for (ObjectError error : listErros) {
					response.getErrors().add(error.getDefaultMessage());
				}
				
				return ResponseEntity.badRequest().body(response);
			}
			
			usuario.setSenha(passwordEncoder.encode(usuario.getSenha())); //CRIPTOGRAFAR SENHA
			Usuario userPersisted = (Usuario) usuarioService.createOrUpdate(usuario);
			response.setData(userPersisted);
			
		} catch (Exception e) {
			LOG.error("Erro update usuario: {}", e.getMessage());
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		LOG.info("Fim update usuario...");
		
		return ResponseEntity.ok(response);
	}
	
	private void validaUsuarioUpdate(Usuario user, BindingResult result) {
		
		LOG.info("Validando update usuario...");
		if(user.getId() == null) {
			result.addError(new ObjectError("User", "ID nao informado!"));
		}
		if(user.getUsername() == null) {
			result.addError(new ObjectError("User", "Username nao informado!"));
		}
	}
	
	@GetMapping(value = "{id}")
	public ResponseEntity<Response<Usuario>> findById(@PathVariable("id") Long id) {
		
		LOG.info("Inicio findById usuario...");
		Response<Usuario> response = new Response<Usuario>();
		Usuario user = usuarioService.findById(id);
		
		if(user == null) {
			response.getErrors().add("Registro nao encontrado id: "+id);
			return ResponseEntity.badRequest().body(response);
		}
		LOG.info("Fim findById usuario...");
		
		response.setData(user);
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping(value = "{id}")
	public ResponseEntity<Response<String>> delete(@PathVariable("id") Long id) {
		
		LOG.info("Inicio delete usuario...");
		Response<String> response = new Response<String>();
		Usuario user = usuarioService.findById(id);
		
		if(user == null) {
			LOG.info("Registro nao encontrado id: {}", id);
			response.getErrors().add("Registro nao encontrado id: "+id);
			return ResponseEntity.badRequest().body(response);
		}
		LOG.info("Fim delete usuario...");
		
		usuarioService.delete(id);
		return ResponseEntity.ok(new Response<String>());
	}
	
	@GetMapping(value = "{page}/{count}")
	public ResponseEntity<Response<Page<Usuario>>> findAll(@PathVariable int page, @PathVariable int count) {
		
		LOG.info("Inicio findAll usuario...");
		Response<Page<Usuario>> response = new Response<Page<Usuario>>();
		
		Page<Usuario> usuarios = usuarioService.findAll(page, count);
		LOG.info("Fim findAll usuario...");
		
		response.setData(usuarios);
		return ResponseEntity.ok(response);
	}
}
