package com.tcc.api.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
@RequestMapping("/api/user")
@CrossOrigin(origins="*")
public class UserController {
	
	@Autowired
	private UsuarioService userService;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@PostMapping
	@PreAuthorize("hasAnyRole('ADMIN')")
	public ResponseEntity<Response<Usuario>> create(HttpServletRequest request, @RequestBody Usuario user,
			BindingResult result) {
		
		Response<Usuario> response = new Response<Usuario>();
		
		try {
			validateCreateUser(user, result);
			if(result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			
			//CRIPTOGRAFAR SENHA
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			Usuario userPersisted = (Usuario) userService.createOrUpdate(user);
			response.setData(userPersisted);
		
		} catch (DuplicateKeyException de) {
			response.getErrors().add("E-mail ja registrado!");
			return ResponseEntity.badRequest().body(response);
		} catch (Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		return ResponseEntity.ok(response);
	}
	
	private void validateCreateUser(Usuario user, BindingResult result) {
		if(user.getEmail() == null) {
			result.addError(new ObjectError("User", "Email nao informado!"));
		}
	}
	
	@PutMapping
	@PreAuthorize("hasAnyRole('ADMIN')")
	public ResponseEntity<Response<Usuario>> update(HttpServletRequest request, @RequestBody Usuario user,
	BindingResult result) {
		
		Response<Usuario> response = new Response<Usuario>();
		
		try {
			validateUpdateUser(user, result);
			if(result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			
			//CRIPTOGRAFAR SENHA
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			Usuario userPersisted = (Usuario) userService.createOrUpdate(user);
			response.setData(userPersisted);
			
		} catch (Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		
		return ResponseEntity.ok(response);
	}
	
	private void validateUpdateUser(Usuario user, BindingResult result) {
		if(user.getId() == null) {
			result.addError(new ObjectError("User", "ID nao informado!"));
		}
		if(user.getEmail() == null) {
			result.addError(new ObjectError("User", "Email nao informado!"));
		}
	}
	
	@GetMapping(value = "{id}")
	@PreAuthorize("hasAnyRole('ADMIN')")
	public ResponseEntity<Response<Usuario>> findById(@PathVariable("id") String id) {
		
		Response<Usuario> response = new Response<Usuario>();
		
		Usuario user = userService.findById(id);
		
		if(user == null) {
			response.getErrors().add("Registro nao encontrado id: "+id);
			return ResponseEntity.badRequest().body(response);
		}
		
		response.setData(user);
		
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping(value = "{id}")
	@PreAuthorize("hasAnyRole('ADMIN')")
	public ResponseEntity<Response<String>> delete(@PathVariable("id") String id) {
		
		Response<String> response = new Response<String>();
		Usuario user = userService.findById(id);
		
		if(user == null) {
			response.getErrors().add("Registro nao encontrado id: "+id);
			return ResponseEntity.badRequest().body(response);
		}
		
		userService.delete(id);
		
		return ResponseEntity.ok(new Response<String>());
	}
	
	@GetMapping(value = "{page}/{count}")
	@PreAuthorize("hasAnyRole('ADMIN')")
	public ResponseEntity<Response<Page<Usuario>>> findAll(@PathVariable int page, @PathVariable int count) {
		
		Response<Page<Usuario>> response = new Response<Page<Usuario>>();
		Page<Usuario> users = userService.findAll(page, count);
		
		response.setData(users);
		
		return ResponseEntity.ok(response);
	}
}
