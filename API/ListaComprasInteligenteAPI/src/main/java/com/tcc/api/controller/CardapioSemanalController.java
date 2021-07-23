package com.tcc.api.controller;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.time.DateUtils;
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

import com.tcc.api.entity.CardapioSemanal;
import com.tcc.api.entity.Receita;
import com.tcc.api.entity.Usuario;
import com.tcc.api.response.Response;
import com.tcc.api.security.jwt.JwtTokenUtil;
import com.tcc.api.service.CardapioSemanalService;
import com.tcc.api.service.ReceitaService;
import com.tcc.api.service.UsuarioService;
import com.tcc.api.util.DataUtils;
import com.tcc.api.util.Util;

@RestController
@RequestMapping(value="/api/cardapio")
@CrossOrigin(origins="*")
public class CardapioSemanalController {
	
	@Autowired
	private CardapioSemanalService cardapiosemanalService;
	
	@Autowired
	private ReceitaService receitaService;
	
	@Autowired
	protected JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	private UsuarioService usuarioService;
	
	@PostMapping()
//	@PreAuthorize("hasAnyRole('CUSTOMER')")
	public ResponseEntity<Response<CardapioSemanal>> create(HttpServletRequest request, @RequestBody CardapioSemanal cardapiosemanal,
			BindingResult result) {
		
		Response<CardapioSemanal> response = new Response<CardapioSemanal>();
		
		try {
//			validaReceitaCriada(modopreparo, result);
//			validaDuplicidade(receita, result);
			
			if(result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			
			if(cardapiosemanal.getDataCriacao() == null) {
				cardapiosemanal.setDataCriacao(LocalDate.now());
			}
			
			CardapioSemanal cardapioSemanalPersitido = (CardapioSemanal) cardapiosemanalService.createOrUpdate(cardapiosemanal);
			response.setData(cardapioSemanalPersitido);
		
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
	public ResponseEntity<Response<CardapioSemanal>> update(HttpServletRequest request, @RequestBody CardapioSemanal cardapiosemanal,
			BindingResult result) {
		
		Response<CardapioSemanal> response = new Response<CardapioSemanal>();
		
		try {
			validaCardapioSemanalUpdate(cardapiosemanal, result);
			if(result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			
			CardapioSemanal  cardapioSemanalPersistido = (CardapioSemanal) cardapiosemanalService.createOrUpdate(cardapiosemanal);
			response.setData(cardapioSemanalPersistido);
			
		} catch (Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		
		return ResponseEntity.ok(response);
	}
	
	private void validaCardapioSemanalUpdate(CardapioSemanal cardapiosemanal, BindingResult result) {
		if(cardapiosemanal.getId() == null) {
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
	public ResponseEntity<Response<CardapioSemanal>> findById(@PathVariable("id") Long id) {
		
		Response<CardapioSemanal> response = new Response<CardapioSemanal>();
		
		CardapioSemanal cardapiosemanal = cardapiosemanalService.findById(id);
		if(cardapiosemanal == null) {
			response.getErrors().add("Registro nao encontrado id: "+id);
			return ResponseEntity.badRequest().body(response);
		}
		
		response.setData(cardapiosemanal);
		
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping(value = "{id}")
	public ResponseEntity<Response<String>> delete(@PathVariable("id") Long id) {
		
		Response<String> response = new Response<String>();
		
		CardapioSemanal cardapiosemanal = cardapiosemanalService.findById(id);
		
		if(cardapiosemanal == null) {
			response.getErrors().add("Registro nao encontrado id: "+id);
			return ResponseEntity.badRequest().body(response);
		}
		
		cardapiosemanalService.delete(id);
		
		return ResponseEntity.ok(new Response<String>());
	}
	
	//EDIT
	@GetMapping(value = "recuperaReceitas/{id}")
	public ResponseEntity<Response<List<Receita>>> recuperaReceitas(@PathVariable("id") Long id) {
		
		Response<List<Receita>> response = new Response<List<Receita>>();
		
		List<Receita> receitas = new ArrayList<Receita>();
		
		CardapioSemanal cardapiosemanal = cardapiosemanalService.findById(id);
		if(cardapiosemanal == null) {
			response.getErrors().add("Registro nao encontrado id: "+id);
			return ResponseEntity.badRequest().body(response);
		}
		
		for (int i = 0; i < cardapiosemanal.getRefeicoes().size(); i++) {
			Receita receita = new Receita();
			if(cardapiosemanal.getRefeicoes().get(i) > 0) {
				receita = receitaService.findById(cardapiosemanal.getRefeicoes().get(i));
			} else {
				receita = new Receita(null, null, null, null);
			}
			receitas.add(receita);
		}
		
		response.setData(receitas);
		
		return ResponseEntity.ok(response);
	}
	
	@GetMapping(value = "findAllByDataCriacao/{data}")
	public ResponseEntity<Response<Boolean>> findAllByDataCriacao(@PathVariable("data") java.util.Date dataCriacao) {
		
		Response<Boolean> response = new Response<Boolean>();
		Boolean isExist = true;
		
		List<CardapioSemanal> cardapios = cardapiosemanalService.findAllByDataCriacao(DataUtils.utilDateToLocalDate(dataCriacao));
		if(cardapios.isEmpty()) {
			//response.getErrors().add("Registro nao encontrado id: "+id);
			//return ResponseEntity.badRequest().body(response);
			isExist = false;
		}
		
		response.setData(isExist);
		
		return ResponseEntity.ok(response);
	}
	
	@GetMapping(value = "{page}/{count}")
	public ResponseEntity<Response<Page<CardapioSemanal>>> findAll(HttpServletRequest request, @PathVariable int page, @PathVariable int count) {

		Response<Page<CardapioSemanal>> response = new Response<Page<CardapioSemanal>>();
		Page<CardapioSemanal> cardapios = null;
		
		cardapios = cardapiosemanalService.findAll(page, count);
		
		if(cardapios.isEmpty()) {
			response.getErrors().add("Nenhum registro encontrado");
			return ResponseEntity.badRequest().body(response);
		}
		
		response.setData(cardapios);
		
		return ResponseEntity.ok(response);
	}
}
