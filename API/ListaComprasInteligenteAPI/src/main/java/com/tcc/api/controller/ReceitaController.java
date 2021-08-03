package com.tcc.api.controller;

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

import com.tcc.api.dto.ReceitaDTO;
import com.tcc.api.entity.Receita;
import com.tcc.api.entity.Usuario;
import com.tcc.api.response.Response;
import com.tcc.api.security.jwt.JwtTokenUtil;
import com.tcc.api.service.ModoPreparoService;
import com.tcc.api.service.ReceitaIngredienteService;
import com.tcc.api.service.ReceitaService;
import com.tcc.api.service.UsuarioService;

@RestController
@RequestMapping(value="/api/receita")
@CrossOrigin(origins="*")
public class ReceitaController {
	
	@Autowired
	private ReceitaService receitaService;
	
	@Autowired
	private ReceitaIngredienteService receitaingredienteService;
	
	@Autowired
	private ModoPreparoService modopreparoService;
	
	@Autowired
	protected JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	private UsuarioService usuarioService;
	
	@PostMapping()
//	@PreAuthorize("hasAnyRole('CUSTOMER')")
	public ResponseEntity<Response<Receita>> create(HttpServletRequest request, @RequestBody Receita receita,
			BindingResult result) {
		
		Response<Receita> response = new Response<Receita>();
		
		try {
			validaReceitaCriada(receita, result);
			validaDuplicidade(receita, result);
			
			if(result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			
			//CREATE
			//receita.setCategoria(CategoriaEnum.getCategoria(receita.getCategoria().toString()));
			
			
			Receita receitaPersitido = (Receita) receitaService.createOrUpdate(receita);
			response.setData(receitaPersitido);
		
		} catch (Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		
		return ResponseEntity.ok(response);
	}

	private void validaReceitaCriada(Receita receita, BindingResult result) {
		if(receita.getNome() == null) {
			result.addError(new ObjectError("Receita", "Nome nao informado!"));
			return;
		}
		if(receita.getCategoria() == null) {
			result.addError(new ObjectError("Receita", "Categoria nao informada!"));
			return;
		}
	}
	
	private void validaDuplicidade(Receita receita, BindingResult result) {
		
		Receita receitaPesquisa = receitaService.findByNome(receita.getNome());
		
		if(receitaPesquisa != null) {
			result.addError(new ObjectError("Ingrediente", "Receita ja cadastrada!"));
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
	public ResponseEntity<Response<Receita>> update(HttpServletRequest request, @RequestBody Receita receita,
			BindingResult result) {
		
		Response<Receita> response = new Response<Receita>();
		
		try {
			validaReceitaUpdate(receita, result);
			if(result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			
			Receita  receitaPersistido = (Receita) receitaService.createOrUpdate(receita);
			response.setData(receitaPersistido);
			
		} catch (Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		
		return ResponseEntity.ok(response);
	}
	
	private void validaReceitaUpdate(Receita receita, BindingResult result) {
		if(receita.getId() == null) {
			result.addError(new ObjectError("Receita", "ID nao informado!"));
			return;
		}
		
		if(receita.getNome() == null) {
			result.addError(new ObjectError("Receita", "Nome nao informado!"));
			return;
		}
		
		if(receita.getCategoria() == null) {
			result.addError(new ObjectError("Receita", "Categoria nao informada!"));
			return;
		}
	}
	
	@GetMapping(value = "{id}")
//	@PreAuthorize("hasAnyRole('CUSTOMER', 'TECHNICIAN')")
	public ResponseEntity<Response<Receita>> findById(@PathVariable("id") Long id) {
		
		Response<Receita> response = new Response<Receita>();
		
		Receita receita = receitaService.findById(id);
		if(receita == null) {
			response.getErrors().add("Registro nao encontrado id: "+id);
			return ResponseEntity.badRequest().body(response);
		}
		
//		List<ChangeStatus> changes = new ArrayList<ChangeStatus>();
//		Iterable<ChangeStatus> changesCurrent = ticketService.listChangeStatus(ticket.getId());
//		for (Iterator<ChangeStatus> iterator = changesCurrent.iterator(); iterator.hasNext();) {
//			ChangeStatus changeStatus = (ChangeStatus) iterator.next();
//			changeStatus.setTicket(null);
//			changes.add(changeStatus);
//		}
//		
//		ticket.setChanges(changes);
		response.setData(receita);
		
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping(value = "{id}")
//	@PreAuthorize("hasAnyRole('CUSTOMER')")
	public ResponseEntity<Response<String>> delete(@PathVariable("id") Long id) {
		
		Response<String> response = new Response<String>();
		
		Receita receita = receitaService.findById(id);
		
		if(receita == null) {
			response.getErrors().add("Registro nao encontrado id: "+id);
			return ResponseEntity.badRequest().body(response);
		}
		
		receitaService.delete(id);
		
		return ResponseEntity.ok(new Response<String>());
	}
	
	@GetMapping(value = "{page}/{count}")
//	@PreAuthorize("hasAnyRole('CUSTOMER', 'TECHNICIAN')")
	public ResponseEntity<Response<Page<Receita>>> findAll(HttpServletRequest request, @PathVariable int page, @PathVariable int count) {

		Response<Page<Receita>> response = new Response<Page<Receita>>();
		Page<Receita> receitas = null;
		
//		Usuario userRequest = userFromRequest(request);
//		if(userRequest.getProfile().equals(ProfileEnum.ROLE_TECHNICIAN)) {
//			tickets = ticketService.listTicket(page, count);
//		}
//		if(userRequest.getProfile().equals(ProfileEnum.ROLE_CUSTOMER)) {
//			tickets = ticketService.findByCurrentUser(page, count, userRequest.getId());
//		}
		
		receitas = receitaService.findAll(page, count);
		
		if(receitas.isEmpty()) {
			response.getErrors().add("Nenhum registro encontrado");
			return ResponseEntity.badRequest().body(response);
		}
		
		response.setData(receitas);
		
		return ResponseEntity.ok(response);
	}
	
	
//	@GetMapping(value = "{page}/{count}/{nome}")
//	public ResponseEntity<Response<Page<Receita>>> findByNome(HttpServletRequest request, @PathVariable("page") int page, 
//			@PathVariable("count") int count, @PathVariable("nome") String nome) {
//		
//		Response<Page<Receita>> response = new Response<Page<Receita>>();
//		Page<Receita> receitas = null;
//		
//		receitas = receitaService.findByNomeIgnoreCaseContainingOrderByNomeDesc(page, count, nome);
//		
//		if(receitas.isEmpty()) {
//			response.getErrors().add("Nenhum registro encontrado com o nome: "+nome);
//			return ResponseEntity.badRequest().body(response);
//		}
//		
//		response.setData(receitas);
//		return ResponseEntity.ok(response);
//	}
	
	//ROLLBACK
	public void deleteReceitaRollback(Long id) {
		receitaService.delete(id);
	}
	
	@GetMapping(value = "pesquisa/{page}/{count}")
	public ResponseEntity<Response<Page<ReceitaDTO>>> findAllPesquisa(HttpServletRequest request, @PathVariable int page, @PathVariable int count) {

		Response<Page<ReceitaDTO>> response = new Response<Page<ReceitaDTO>>();
		
		Page<ReceitaDTO> dtos = null;
		List<ReceitaDTO> dtolist = new ArrayList<ReceitaDTO>();
		
		//receitas = receitaService.pesquisaReceita(page, count);
		
		//PREENCHE DTO
		List<Receita> receitas = receitaService.findAll();
		if(receitas != null) {
			for (Receita rec : receitas) {
				Integer qtdIng = receitaService.countIngredientePorReceita(rec.getId());
				if(qtdIng >= 1) {
					ReceitaDTO dto = new ReceitaDTO();
					dto.setId(rec.getId());
					dto.setNome(rec.getNome());
					dto.setCategoria(rec.getCategoria());
					dto.setQuantidade(qtdIng);
					dto.setUsuario(rec.getUsuario().getNome());
					dtolist.add(dto);
				} else { //lentidao?
					deleteAll(rec.getId());
				}
			}
		}
		
		//CONVERT LIST TO PAGE
		//https://stackoverflow.com/questions/37749559/conversion-of-list-to-page-in-spring
		Pageable pageable = PageRequest.of(page, count);
		
		int start = Math.min((int)pageable.getOffset(), dtolist.size());
		int end = Math.min((start + pageable.getPageSize()), dtolist.size());

		dtos = new PageImpl<>(dtolist.subList(start, end), pageable, dtolist.size());
		
		//dtos = new PageImpl<>(dtolist, pageable, dtolist.size());
		
		if(dtos.isEmpty()) {
			response.getErrors().add("Nenhum registro encontrado");
			return ResponseEntity.badRequest().body(response);
		}
		
		response.setData(dtos);
		
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping(value = "deleteAll/{id}")
	public ResponseEntity<Response<String>> deleteAll(@PathVariable("id") Long id) {
		
		Response<String> response = new Response<String>();
		
		Receita receita = receitaService.findById(id);
		
		if(receita == null) {
			response.getErrors().add("Registro nao encontrado id: "+id);
			return ResponseEntity.badRequest().body(response);
		}
		
		//sequencia
		modopreparoService.deleteByReceitaId(id);
		receitaingredienteService.deleteByReceitaId(id);
		receitaService.delete(id);
		
		return ResponseEntity.ok(new Response<String>());
	}
}
