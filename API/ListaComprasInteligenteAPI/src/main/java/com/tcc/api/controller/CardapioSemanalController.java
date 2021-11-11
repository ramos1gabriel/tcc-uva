package com.tcc.api.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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

import com.tcc.api.dto.CardapioSemanalDTO;
import com.tcc.api.entity.CardapioSemanal;
import com.tcc.api.entity.Usuario;
import com.tcc.api.enums.DiaEnum;
import com.tcc.api.enums.RefeicaoEnum;
import com.tcc.api.response.Response;
import com.tcc.api.security.jwt.JwtTokenUtil;
import com.tcc.api.service.CardapioSemanalService;
import com.tcc.api.service.ReceitaService;
import com.tcc.api.service.UsuarioService;
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
	
//	@PostMapping()
//	@PreAuthorize("hasAnyRole('CUSTOMER')")
//	public ResponseEntity<Response<CardapioSemanal>> create(HttpServletRequest request, @RequestBody CardapioSemanal cardapiosemanal,
//			BindingResult result) {
//		
//		Response<CardapioSemanal> response = new Response<CardapioSemanal>();
//		
//		try {
////			validaReceitaCriada(modopreparo, result);
////			validaDuplicidade(receita, result);
//			
//			if(result.hasErrors()) {
//				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
//				return ResponseEntity.badRequest().body(response);
//			}
//			
//			if(cardapiosemanal.getDataCriacao() == null) {
//				cardapiosemanal.setDataCriacao(LocalDate.now());
//			}
//			
//			CardapioSemanal cardapioSemanalPersitido = (CardapioSemanal) cardapiosemanalService.createOrUpdate(cardapiosemanal);
//			response.setData(cardapioSemanalPersitido);
//		
//		} catch (Exception e) {
//			response.getErrors().add(e.getMessage());
//			return ResponseEntity.badRequest().body(response);
//		}
//		
//		return ResponseEntity.ok(response);
//	}
	
	@PostMapping()
	public ResponseEntity<Response<CardapioSemanal>> create(HttpServletRequest request, 
			@RequestBody List<CardapioSemanal> listCardapio, BindingResult result) {
		
		Response<CardapioSemanal> response = new Response<CardapioSemanal>();
		
		try {
			validaCriacao(listCardapio, result);
			//validaDuplicidade(recIng, result); //nao tem duplicidade no cardapio
			
			//seta data em cada item
			for (CardapioSemanal cardapioSemanal : listCardapio) {
				if(cardapioSemanal.getDataCriacao() == null) {
					cardapioSemanal.setDataCriacao(LocalDate.now());
				}
			}
			
			if(result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			
			List<CardapioSemanal> listCardapioPersitido = (List<CardapioSemanal>) cardapiosemanalService.createOrUpdateAll(listCardapio);
			for (int i = 0; i < listCardapioPersitido.size(); i++) {
				response.getDatas().add(listCardapioPersitido.get(i));
			}
		
		} catch (Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		
		return ResponseEntity.ok(response);
	}

	private void validaCriacao(List<CardapioSemanal> listCardapio, BindingResult result) {
		listCardapio.forEach(cardapio -> {
			if(cardapio.getReceita().getId() == null) {
				result.addError(new ObjectError("CardapioSemanal", "Receita nao informada!"));
				return;
			}
		});
	}
	
	@PutMapping()
	public ResponseEntity<Response<CardapioSemanal>> update(HttpServletRequest request, 
			@RequestBody List<CardapioSemanal> listCardapio, BindingResult result) {
		
		Response<CardapioSemanal> response = new Response<CardapioSemanal>();
		
		try {
			validaUpdate(listCardapio, result);
			
			//seta data em cada item
//			for (CardapioSemanal cardapioSemanal : listCardapio) {
//				if(cardapioSemanal.getDataCriacao() == null) {
//					cardapioSemanal.setDataCriacao(LocalDate.now());
//				}
//			}
			
			if(result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			
			List<CardapioSemanal> listCardapioPersitido = (List<CardapioSemanal>) cardapiosemanalService.createOrUpdateAll(listCardapio);
			for (int i = 0; i < listCardapioPersitido.size(); i++) {
				response.getDatas().add(listCardapioPersitido.get(i));
			}
		
		} catch (Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		
		return ResponseEntity.ok(response);
	}

	private void validaUpdate(List<CardapioSemanal> listCardapio, BindingResult result) {
		listCardapio.forEach(cardapio -> {
			if(cardapio.getReceita().getId() == null) {
				result.addError(new ObjectError("CardapioSemanal", "Receita nao informada!"));
				return;
			}
		});
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
	
//	@PutMapping()
//	public ResponseEntity<Response<CardapioSemanal>> update(HttpServletRequest request, @RequestBody CardapioSemanal cardapiosemanal,
//			BindingResult result) {
//		
//		Response<CardapioSemanal> response = new Response<CardapioSemanal>();
//		
//		try {
//			validaCardapioSemanalUpdate(cardapiosemanal, result);
//			if(result.hasErrors()) {
//				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
//				return ResponseEntity.badRequest().body(response);
//			}
//			
//			CardapioSemanal  cardapioSemanalPersistido = (CardapioSemanal) cardapiosemanalService.createOrUpdate(cardapiosemanal);
//			response.setData(cardapioSemanalPersistido);
//			
//		} catch (Exception e) {
//			response.getErrors().add(e.getMessage());
//			return ResponseEntity.badRequest().body(response);
//		}
//		
//		return ResponseEntity.ok(response);
//	}
//	
//	private void validaCardapioSemanalUpdate(CardapioSemanal cardapiosemanal, BindingResult result) {
//		if(cardapiosemanal.getId() == null) {
//			result.addError(new ObjectError("ModoPreparo", "ID nao informado!"));
//			return;
//		}
//		
////		if(receita.getNome() == null) {
////			result.addError(new ObjectError("Receita", "Nome nao informado!"));
////			return;
////		}
////		
////		if(receita.getCategoria() == null) {
////			result.addError(new ObjectError("Receita", "Categoria nao informada!"));
////			return;
////		}
//	}
	
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
//	@GetMapping(value = "recuperaReceitas/{id}")
//	public ResponseEntity<Response<List<Receita>>> recuperaReceitas(@PathVariable("id") Long id) {
//		
//		Response<List<Receita>> response = new Response<List<Receita>>();
//		
//		List<Receita> receitas = new ArrayList<Receita>();
//		
//		CardapioSemanal cardapiosemanal = cardapiosemanalService.findById(id);
//		if(cardapiosemanal == null) {
//			response.getErrors().add("Registro nao encontrado id: "+id);
//			return ResponseEntity.badRequest().body(response);
//		}
//		
//		for (int i = 0; i < cardapiosemanal.getRefeicoes().size(); i++) {
//			Receita receita = new Receita();
//			if(cardapiosemanal.getRefeicoes().get(i) > 0) {
//				receita = receitaService.findById(cardapiosemanal.getRefeicoes().get(i));
//			} else {
//				receita = new Receita(null, null, null, null);
//			}
//			receitas.add(receita);
//		}
//		
//		response.setData(receitas);
//		
//		return ResponseEntity.ok(response);
//	}
	
//	@GetMapping(value = "findAllByDataCriacao/{data}")
//	public ResponseEntity<Response<Boolean>> findAllByDataCriacao(@PathVariable("data") java.util.Date dataCriacao) {
//		
//		Response<Boolean> response = new Response<Boolean>();
//		Boolean isExist = true;
//		
//		List<CardapioSemanal> cardapios = cardapiosemanalService.findAllByDataCriacao(DataUtils.utilDateToLocalDate(dataCriacao));
//		if(cardapios.isEmpty()) {
//			//response.getErrors().add("Registro nao encontrado id: "+id);
//			//return ResponseEntity.badRequest().body(response);
//			isExist = false;
//		}
//		
//		response.setData(isExist);
//		
//		return ResponseEntity.ok(response);
//	}
	
	@GetMapping(value = "findAllByDataCriacao/{data}")
	public ResponseEntity<Response<CardapioSemanal>> findAllByDataCriacao(@PathVariable("data") String dataCriacao) {
		
		Response<CardapioSemanal> response = new Response<CardapioSemanal>();
		
		try {
			//java.time.LocalDate dataCriacaoLocalDate = DataUtils.utilDateToLocalDate(dataCriacao);
			List<CardapioSemanal> cardapios = cardapiosemanalService.findAllByDataCriacao(Util.stringToLocalDate(dataCriacao));
			
			if(cardapios.isEmpty()) {
				response.getErrors().add("Nenhum registro foi encontrado com a data "+dataCriacao);
				return ResponseEntity.badRequest().body(response);
			}
			
			for (int i = 0; i < cardapios.size(); i++) {
				response.getDatas().add(cardapios.get(i));
			}
		
		} catch (Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		
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
	
//	@GetMapping(value = "findAllGroupByDataCriacao/{page}/{count}")
//	public ResponseEntity<Response<Page<CardapioSemanal>>> findAllGroupByDataCriacao(HttpServletRequest request, @PathVariable int page, @PathVariable int count) {
//
//		Response<Page<CardapioSemanal>> response = new Response<Page<CardapioSemanal>>();
//		Page<CardapioSemanal> cardapios = null;
//		
//		cardapios = cardapiosemanalService.findAllGroupByDataCriacao(page, count);
//		//Integer count = cardapiosemanalService.countReceitas(null);
//		
//		if(cardapios.isEmpty()) {
//			response.getErrors().add("Nenhum registro encontrado");
//			return ResponseEntity.badRequest().body(response);
//		}
//		
//		response.setData(cardapios);
//		
//		return ResponseEntity.ok(response);
//	}
	
	@GetMapping(value = "pesquisa/{page}/{count}")
	public ResponseEntity<Response<Page<CardapioSemanalDTO>>> findAllPesquisa(HttpServletRequest request, @PathVariable int page, @PathVariable int count) {

		Response<Page<CardapioSemanalDTO>> response = new Response<Page<CardapioSemanalDTO>>();
		
		Page<CardapioSemanalDTO> dtos = null;
		List<CardapioSemanalDTO> dtolist = new ArrayList<CardapioSemanalDTO>();
		Integer qtdRefeicoes = 0;
		
		//PREENCHE DTO
		List<CardapioSemanal> cardapios = cardapiosemanalService.findAllGroupByDataCriacao();
		if(!cardapios.isEmpty()) {
			for (CardapioSemanal car : cardapios) {
				qtdRefeicoes = cardapiosemanalService.countReceitas(car.getDataCriacao());
				CardapioSemanalDTO dto = new CardapioSemanalDTO();
				dto.setId(car.getId());
				dto.setDataCriacao(car.getDataCriacao());
				dto.setTipoRefeicao(car.getTipoRefeicao());
				dto.setDiaSemana(car.getDiaSemana());
				dto.setQtdRefeicoes(qtdRefeicoes);
				dtolist.add(dto);
			}
		}
		
		//CONVERT LIST TO PAGE
		//https://stackoverflow.com/questions/37749559/conversion-of-list-to-page-in-spring
		Pageable pageable = PageRequest.of(page, count);
		
		int start = Math.min((int)pageable.getOffset(), dtolist.size());
		int end = Math.min((start + pageable.getPageSize()), dtolist.size());

		dtos = new PageImpl<>(dtolist.subList(start, end), pageable, dtolist.size());
		
		if(dtos.isEmpty()) {
			response.getErrors().add("Nenhum registro encontrado");
			return ResponseEntity.badRequest().body(response);
		}
		
		response.setData(dtos);
		
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping(value = "deleteByDataCriacao/{data}")
	public ResponseEntity<Response<String>> deleteByDataCriacao(@PathVariable("data") String data) {
		
		Response<String> response = new Response<String>();
		
		try {
			java.time.LocalDate dataLocalDate = Util.stringToLocalDate(data);
			cardapiosemanalService.deleteByDataCriacao(dataLocalDate);
		} catch(Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		
		return ResponseEntity.ok(new Response<String>());
	}
	
	@GetMapping(value = "count/{data}")
	public ResponseEntity<Response<Boolean>> count(@PathVariable("data") String data) {

		Response<Boolean> response = new Response<Boolean>();
		Boolean retorno = false;
		
		java.time.LocalDate dataLocalDate = Util.stringToLocalDate(data);
		Integer qtd = cardapiosemanalService.countReceitas(dataLocalDate);
		
		if(qtd > 0) {
//			response.getErrors().add("Nenhum registro encontrado");
//			return ResponseEntity.badRequest().body(response);
			retorno = true;
		}
		
		response.setData(retorno);
		
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping(value = "deleteByDiaSemanaAndTipoRefeicaoAndDataCriacao/{diaSemana}/{tipoRefeicao}/{data}")
	public ResponseEntity<Response<String>> deleteByDiaSemanaAndTipoRefeicaoAndDataCriacao(
			@PathVariable("diaSemana") String diaSemana, @PathVariable("tipoRefeicao") String tipoRefeicao, 
			@PathVariable("data") String data) {
		
		Response<String> response = new Response<String>();
		
		try {
			java.time.LocalDate dataLocalDate = Util.stringToLocalDate(data);
			DiaEnum dia = DiaEnum.getDia(diaSemana);
			RefeicaoEnum refeicao = RefeicaoEnum.getRefeicao(tipoRefeicao);
			cardapiosemanalService.deleteByDiaSemanaAndTipoRefeicaoAndDataCriacao(dia, refeicao, dataLocalDate);
		} catch(Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		
		return ResponseEntity.ok(new Response<String>());
	}
}
