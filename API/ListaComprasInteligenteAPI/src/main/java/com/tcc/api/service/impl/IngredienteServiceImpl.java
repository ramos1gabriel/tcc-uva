package com.tcc.api.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.tcc.api.entity.Ingrediente;
import com.tcc.api.repository.IngredienteRepository;
import com.tcc.api.service.IngredienteService;

@Service
public class IngredienteServiceImpl implements IngredienteService {
	
	@Autowired
	private IngredienteRepository ingredienteRepository;

	@Override
	public Ingrediente findByNome(String nome) {
		return this.ingredienteRepository.findByNome(nome);
	}

	@Override
	public Ingrediente createOrUpdate(Ingrediente ingrediente) {
		return this.ingredienteRepository.save(ingrediente);
	}

	@Override
	public Ingrediente findById(Long id) {
		return this.ingredienteRepository.findById(id).orElse(null); //findOne nao funciona da mesma forma q antes no SPRING 2
	}

	@Override
	public void delete(Long id) {
		this.ingredienteRepository.deleteById(id); //delete nao funciona da mesma forma q antes no SPRING 2
	}

	@Override
	public Page<Ingrediente> findAll(int page, int count) {
		Pageable pages = PageRequest.of(page, count); //contrutor de PageRequest esta deprecated no SPRING 2, trocar por .of
		return this.ingredienteRepository.findAll(pages);
	}
	
	@Override
	public Page<Ingrediente> findByNomeIgnoreCaseContainingOrderByDesc(int page, int count, String nome) {

		Pageable pages = PageRequest.of(page, count);
		return this.ingredienteRepository.findByNomeIgnoreCaseContainingOrderByNomeDesc(nome, pages);
	}
}
