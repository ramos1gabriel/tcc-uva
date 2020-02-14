package com.tcc.api.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.tcc.api.entity.ReceitaIngredientes;
import com.tcc.api.repository.ReceitaIngredienteRepository;
import com.tcc.api.service.ReceitaIngredienteService;

@Service
public class ReceitaIngredienteServiceImpl implements ReceitaIngredienteService {
	
	@Autowired
	private ReceitaIngredienteRepository recIngRepository;

	@Override
	public ReceitaIngredientes createOrUpdate(ReceitaIngredientes recIng) {
		return this.recIngRepository.save(recIng);
	}

	@Override
	public ReceitaIngredientes findById(Long id) {
		return this.recIngRepository.findById(id).orElse(null); //findOne nao funciona da mesma forma q antes no SPRING 2
	}

	@Override
	public void delete(Long id) {
		this.recIngRepository.deleteById(id); //delete nao funciona da mesma forma q antes no SPRING 2
	}

	@Override
	public Page<ReceitaIngredientes> findAll(int page, int count) {
		Pageable pages = PageRequest.of(page, count); //contrutor de PageRequest esta deprecated no SPRING 2, trocar por .of
		return this.recIngRepository.findAll(pages);
	}
}
