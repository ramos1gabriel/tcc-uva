package com.tcc.api.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

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
public class UserController {
	
	@Autowired
	private UsuarioService usuarioService;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@PostMapping
//	@PreAuthorize("hasAnyRole('ADMIN')")
	public ResponseEntity<Response<Usuario>> create(HttpServletRequest request, @RequestBody Usuario usuario,
			BindingResult result) {
		
		Response<Usuario> response = new Response<Usuario>();
		
		try {
			validaUsuarioCriado(usuario, result);
			
			if(result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			
			usuario.setSenha(passwordEncoder.encode(usuario.getSenha())); //CRIPTOGRAFAR SENHA
			
			//SALVAR DADOS
			Usuario userPersisted = (Usuario) usuarioService.createOrUpdate(usuario);
			response.setData(userPersisted);
		
		} catch (DuplicateKeyException de) {
			response.getErrors().add("Usuario ja registrado!");
			return ResponseEntity.badRequest().body(response);
		} catch (Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		return ResponseEntity.ok(response);
	}
	
	private void validaUsuarioCriado(Usuario usuario, BindingResult result) {
		if(usuario.getUsername() == null) {
			result.addError(new ObjectError("Usuario", "Nome de usuario nao informado!"));
		}
	}
	
	@PutMapping
//	@PreAuthorize("hasAnyRole('ADMIN')")
	public ResponseEntity<Response<Usuario>> update(HttpServletRequest request, @RequestBody Usuario usuario,
	BindingResult result) {
		
		Response<Usuario> response = new Response<Usuario>();
		
		try {
			validaUsuarioUpdate(usuario, result);
			if(result.hasErrors()) {
				//result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
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
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		
		return ResponseEntity.ok(response);
	}
	
	private void validaUsuarioUpdate(Usuario user, BindingResult result) {
		if(user.getId() == null) {
			result.addError(new ObjectError("User", "ID nao informado!"));
		}
		if(user.getUsername() == null) {
			result.addError(new ObjectError("User", "Username nao informado!"));
		}
	}
	
	@GetMapping(value = "{id}")
//	@PreAuthorize("hasAnyRole('ADMIN')")
	public ResponseEntity<Response<Usuario>> findById(@PathVariable("id") String id) {
		
		Response<Usuario> response = new Response<Usuario>();
		
		Usuario user = usuarioService.findById(id);
		
		if(user == null) {
			response.getErrors().add("Registro nao encontrado id: "+id);
			return ResponseEntity.badRequest().body(response);
		}
		
		response.setData(user);
		
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping(value = "{id}")
//	@PreAuthorize("hasAnyRole('ADMIN')")
	public ResponseEntity<Response<String>> delete(@PathVariable("id") String id) {
		
		Response<String> response = new Response<String>();
		Usuario user = usuarioService.findById(id);
		
		if(user == null) {
			response.getErrors().add("Registro nao encontrado id: "+id);
			return ResponseEntity.badRequest().body(response);
		}
		
		usuarioService.delete(id);
		
		return ResponseEntity.ok(new Response<String>());
	}
	
	@GetMapping(value = "{page}/{count}")
//	@PreAuthorize("hasAnyRole('ADMIN')")
	public ResponseEntity<Response<Page<Usuario>>> findAll(@PathVariable int page, @PathVariable int count) {
		
		Response<Page<Usuario>> response = new Response<Page<Usuario>>();
		Page<Usuario> usuarios = usuarioService.findAll(page, count);
		
		response.setData(usuarios);
		
		return ResponseEntity.ok(response);
	}
}
