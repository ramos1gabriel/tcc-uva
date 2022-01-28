package com.tcc.api.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
import com.tcc.api.service.UsuarioService;
import com.tcc.api.util.Util;

@RestController
@RequestMapping(value="/api/cardapio")
@CrossOrigin(origins="*")
public class CardapioSemanalController {
	
	private static final Logger LOG = LoggerFactory.getLogger(CardapioSemanalController.class);
	
	@Autowired
	private CardapioSemanalService cardapiosemanalService;
	
	@Autowired
	protected JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	private UsuarioService usuarioService;
	
	@PostMapping()
	public ResponseEntity<Response<CardapioSemanal>> create(HttpServletRequest request, 
			@RequestBody List<CardapioSemanal> listCardapio, BindingResult result) {
		
		LOG.info("Inicio create cardapio...");
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
			LOG.info("Fim create cardapio...");
		
		} catch (Exception e) {
			LOG.error("Erro create cardapio: {}", e.getMessage());
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		
		return ResponseEntity.ok(response);
	}

	private void validaCriacao(List<CardapioSemanal> listCardapio, BindingResult result) {
		
		LOG.info("Validando create cardapio...");
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
		
		LOG.info("Inicio update cardapio...");
		Response<CardapioSemanal> response = new Response<CardapioSemanal>();
		
		try {
			validaUpdate(listCardapio, result);
			
			if(result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			
			List<CardapioSemanal> listCardapioPersitido = (List<CardapioSemanal>) cardapiosemanalService.createOrUpdateAll(listCardapio);
			for (int i = 0; i < listCardapioPersitido.size(); i++) {
				response.getDatas().add(listCardapioPersitido.get(i));
			}
		
		} catch (Exception e) {
			LOG.error("Erro update receita: {}", e.getMessage());
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		LOG.info("Fim update cardapio...");
		
		return ResponseEntity.ok(response);
	}

	private void validaUpdate(List<CardapioSemanal> listCardapio, BindingResult result) {
		
		LOG.info("Validando update cardapio...");
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
	
	@GetMapping(value = "{id}")
	public ResponseEntity<Response<CardapioSemanal>> findById(@PathVariable("id") Long id) {
		
		LOG.info("Inicio findById cardapio...");
		Response<CardapioSemanal> response = new Response<CardapioSemanal>();
		
		CardapioSemanal cardapiosemanal = cardapiosemanalService.findById(id);
		if(cardapiosemanal == null) {
			response.getErrors().add("Registro nao encontrado id: "+id);
			LOG.info("Registro nao encontrado id: {}", id);
			return ResponseEntity.badRequest().body(response);
		}
		
		LOG.info("Fim findById cardapio...");
		response.setData(cardapiosemanal);
		
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping(value = "{id}")
	public ResponseEntity<Response<String>> delete(@PathVariable("id") Long id) {
		
		LOG.info("Inicio delete cardapio...");
		Response<String> response = new Response<String>();
		
		CardapioSemanal cardapiosemanal = cardapiosemanalService.findById(id);
		
		if(cardapiosemanal == null) {
			response.getErrors().add("Registro nao encontrado id: "+id);
			LOG.info("Registro nao encontrado id: {}", id);
			return ResponseEntity.badRequest().body(response);
		}
		
		cardapiosemanalService.delete(id);
		LOG.info("Fim delete cardapio...");
		
		return ResponseEntity.ok(new Response<String>());
	}
	
	@GetMapping(value = "findAllByDataCriacao/{data}")
	public ResponseEntity<Response<CardapioSemanal>> findAllByDataCriacao(@PathVariable("data") String dataCriacao) {
		
		LOG.info("Inicio findAllByDataCriacao cardapio...");
		Response<CardapioSemanal> response = new Response<CardapioSemanal>();
		
		try {
			//java.time.LocalDate dataCriacaoLocalDate = DataUtils.utilDateToLocalDate(dataCriacao);
			List<CardapioSemanal> cardapios = cardapiosemanalService.findAllByDataCriacao(Util.stringToLocalDate(dataCriacao));
			
			if(cardapios.isEmpty()) {
				LOG.info("Nenhum registro foi encontrado com a data {} ", dataCriacao);
				response.getErrors().add("Nenhum registro foi encontrado com a data "+dataCriacao);
				return ResponseEntity.badRequest().body(response);
			}
			
			for (int i = 0; i < cardapios.size(); i++) {
				response.getDatas().add(cardapios.get(i));
			}
		
		} catch (Exception e) {
			LOG.error("Erro findAllByDataCriacao cardapio: {}", e.getMessage());
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		LOG.info("Fim findAllByDataCriacao cardapio...");
		
		return ResponseEntity.ok(response);
	}
	
	@GetMapping(value = "{page}/{count}")
	public ResponseEntity<Response<Page<CardapioSemanal>>> findAll(HttpServletRequest request, @PathVariable int page, @PathVariable int count) {
		
		LOG.info("Inicio findAll cardapio...");
		Response<Page<CardapioSemanal>> response = new Response<Page<CardapioSemanal>>();
		Page<CardapioSemanal> cardapios = null;
		
		cardapios = cardapiosemanalService.findAll(page, count);
		
		if(cardapios.isEmpty()) {
			LOG.info("Nenhum registro encontrado");
			response.getErrors().add("Nenhum registro encontrado");
			return ResponseEntity.badRequest().body(response);
		}
		
		response.setData(cardapios);
		LOG.info("Fim findAll cardapio...");
		
		return ResponseEntity.ok(response);
	}
	
	@GetMapping(value = "pesquisa/{page}/{count}")
	public ResponseEntity<Response<Page<CardapioSemanalDTO>>> findAllPesquisa(HttpServletRequest request, @PathVariable int page, @PathVariable int count) {

		LOG.info("Inicio findAllPesquisa cardapio...");
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
			LOG.info("Nenhum registro encontrado");
			response.getErrors().add("Nenhum registro encontrado");
			return ResponseEntity.badRequest().body(response);
		}
		
		LOG.info("Fim findAllPesquisa cardapio...");
		response.setData(dtos);
		
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping(value = "deleteByDataCriacao/{data}")
	public ResponseEntity<Response<String>> deleteByDataCriacao(@PathVariable("data") String data) {
		
		LOG.info("Inicio deleteByDataCriacao cardapio...");
		Response<String> response = new Response<String>();
		
		try {
			java.time.LocalDate dataLocalDate = Util.stringToLocalDate(data);
			cardapiosemanalService.deleteByDataCriacao(dataLocalDate);
		} catch(Exception e) {
			LOG.error("Erro deleteByDataCriacao cardapio: {}", e.getMessage());
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		LOG.info("Fim deleteByDataCriacao cardapio...");
		
		return ResponseEntity.ok(new Response<String>());
	}
	
	@GetMapping(value = "count/{data}")
	public ResponseEntity<Response<Boolean>> count(@PathVariable("data") String data) {

		LOG.info("Inicio count cardapio...");
		Response<Boolean> response = new Response<Boolean>();
		Boolean retorno = false;
		
		java.time.LocalDate dataLocalDate = Util.stringToLocalDate(data);
		Integer qtd = cardapiosemanalService.countReceitas(dataLocalDate);
		
		if(qtd > 0) {
//			response.getErrors().add("Nenhum registro encontrado");
//			return ResponseEntity.badRequest().body(response);
			retorno = true;
		}
		LOG.info("Fim count cardapio...");
		
		response.setData(retorno);
		
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping(value = "deleteByDiaSemanaAndTipoRefeicaoAndDataCriacao/{diaSemana}/{tipoRefeicao}/{data}")
	public ResponseEntity<Response<String>> deleteByDiaSemanaAndTipoRefeicaoAndDataCriacao(
			@PathVariable("diaSemana") String diaSemana, @PathVariable("tipoRefeicao") String tipoRefeicao, 
			@PathVariable("data") String data) {
		
		LOG.info("Inicio count cardapio...");
		Response<String> response = new Response<String>();
		
		try {
			java.time.LocalDate dataLocalDate = Util.stringToLocalDate(data);
			DiaEnum dia = DiaEnum.getDia(diaSemana);
			RefeicaoEnum refeicao = RefeicaoEnum.getRefeicao(tipoRefeicao);
			cardapiosemanalService.deleteByDiaSemanaAndTipoRefeicaoAndDataCriacao(dia, refeicao, dataLocalDate);
		} catch(Exception e) {
			LOG.error("Erro deleteByDiaSemanaAndTipoRefeicaoAndDataCriacao cardapio: {}", e.getMessage());
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		LOG.info("Fim count cardapio...");
		
		return ResponseEntity.ok(new Response<String>());
	}
}
