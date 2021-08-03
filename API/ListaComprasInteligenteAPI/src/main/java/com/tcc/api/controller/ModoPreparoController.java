package com.tcc.api.controller;

import java.util.Random;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.tcc.api.entity.ModoPreparo;
import com.tcc.api.entity.Usuario;
import com.tcc.api.response.Response;
import com.tcc.api.security.jwt.JwtTokenUtil;
import com.tcc.api.service.ModoPreparoService;
import com.tcc.api.service.UsuarioService;

@RestController
@RequestMapping(value="/api/modopreparo")
@CrossOrigin(origins="*")
public class ModoPreparoController {
	
	@Autowired
	private ModoPreparoService modopreparoService;
	
	@Autowired
	protected JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	private UsuarioService usuarioService;
	
	@PostMapping()
//	@PreAuthorize("hasAnyRole('CUSTOMER')")
	public ResponseEntity<Response<ModoPreparo>> create(HttpServletRequest request, @RequestBody ModoPreparo modopreparo,
			BindingResult result) {
		
		Response<ModoPreparo> response = new Response<ModoPreparo>();
		
		try {
//			validaReceitaCriada(modopreparo, result);
//			validaDuplicidade(receita, result);
			
			if(result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			
			ModoPreparo modopreparoPersitido = (ModoPreparo) modopreparoService.createOrUpdate(modopreparo);
			response.setData(modopreparoPersitido);
		
		} catch (Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		
		return ResponseEntity.ok(response);
	}

//	private void validaReceitaCriada(Receita receita, BindingResult result) {
//		if(receita.getNome() == null) {
//			result.addError(new ObjectError("Receita", "Nome nao informado!"));
//			return;
//		}
//		if(receita.getCategoria() == null) {
//			result.addError(new ObjectError("Receita", "Categoria nao informada!"));
//			return;
//		}
//	}
	
//	private void validaDuplicidade(Receita receita, BindingResult result) {
//		
//		Receita receitaPesquisa = receitaService.findByNome(receita.getNome());
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
	
	private Integer generateNumber() {
		Random random = new Random();
		return random.nextInt(9999);
	}
	
	@PutMapping()
//	@PreAuthorize("hasAnyRole('CUSTOMER')")
	public ResponseEntity<Response<ModoPreparo>> update(HttpServletRequest request, @RequestBody ModoPreparo modopreparo,
			BindingResult result) {
		
		Response<ModoPreparo> response = new Response<ModoPreparo>();
		
		try {
			validaModoPreparoUpdate(modopreparo, result);
			if(result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			
			ModoPreparo  modopreparoPersistido = (ModoPreparo) modopreparoService.createOrUpdate(modopreparo);
			response.setData(modopreparoPersistido);
			
		} catch (Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		
		return ResponseEntity.ok(response);
	}
	
	private void validaModoPreparoUpdate(ModoPreparo modopreparo, BindingResult result) {
		if(modopreparo.getId() == null) {
			result.addError(new ObjectError("ModoPreparo", "ID nao informado!"));
			return;
		}
		
//		if(receita.getNome() == null) {
//			result.addError(new ObjectError("Receita", "Nome nao informado!"));
//			return;
//		}
//		
//		if(receita.getCategoria() == null) {
//			result.addError(new ObjectError("Receita", "Categoria nao informada!"));
//			return;
//		}
	}
	
	@GetMapping(value = "{id}")
	public ResponseEntity<Response<ModoPreparo>> findById(@PathVariable("id") Long id) {
		
		Response<ModoPreparo> response = new Response<ModoPreparo>();
		
		ModoPreparo modopreparo = modopreparoService.findById(id);
		if(modopreparo == null) {
			response.getErrors().add("Registro nao encontrado id: "+id);
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(modopreparo);
		
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping(value = "{id}")
	public ResponseEntity<Response<String>> delete(@PathVariable("id") Long id) {
		
		Response<String> response = new Response<String>();
		
		ModoPreparo modopreparo = modopreparoService.findById(id);
		
		if(modopreparo == null) {
			response.getErrors().add("Registro nao encontrado id: "+id);
			return ResponseEntity.badRequest().body(response);
		}
		
		modopreparoService.delete(id);
		
		return ResponseEntity.ok(new Response<String>());
	}
	
	//ROLLBACK
	public void deleteReceitaRollback(Long id) {
		modopreparoService.delete(id);
	}
	
	@GetMapping(value = "findByReceitaId/{id}")
	public ResponseEntity<Response<ModoPreparo>> findByReceitaId(@PathVariable("id") Long id) {
		
		Response<ModoPreparo> response = new Response<ModoPreparo>();
		
		ModoPreparo modopreparo = modopreparoService.findByReceitaId(id);
		
		if(modopreparo == null) {
			response.getErrors().add("Registros nao encontrado para o receita id: "+id);
			return ResponseEntity.badRequest().body(response);
		}
		
		response.setData(modopreparo);
		
		return ResponseEntity.ok(response);
	}
}
