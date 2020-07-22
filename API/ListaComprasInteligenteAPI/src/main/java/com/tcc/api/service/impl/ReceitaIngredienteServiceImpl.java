package com.tcc.api.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tcc.api.entity.ReceitaIngrediente;
import com.tcc.api.repository.ReceitaIngredienteRepository;
import com.tcc.api.service.ReceitaIngredienteService;

@Service
public class ReceitaIngredienteServiceImpl implements ReceitaIngredienteService {
	
	@Autowired
	private ReceitaIngredienteRepository recIngRepository;

	@Override
	public ReceitaIngrediente createOrUpdate(ReceitaIngrediente recIng) {
		return this.recIngRepository.save(recIng);
	}
	
	@Override
	public List<ReceitaIngrediente> createOrUpdateAll(List<ReceitaIngrediente> listRecIng) {
		return this.recIngRepository.saveAll(listRecIng);
	}

	@Override
	public ReceitaIngrediente findById(Long id) {
		return this.recIngRepository.findById(id).orElse(null); //findOne nao funciona da mesma forma q antes no SPRING 2
	}

	@Override
	public void delete(Long id) {
		this.recIngRepository.deleteById(id); //delete nao funciona da mesma forma q antes no SPRING 2
	}

	@Override
	public Page<ReceitaIngrediente> findAll(int page, int count) {
		Pageable pages = PageRequest.of(page, count); //contrutor de PageRequest esta deprecated no SPRING 2, trocar por .of
		return this.recIngRepository.findAll(pages);
	}

	@Override
	@Transactional
	public void deleteByReceitaId(Long id) {
		this.recIngRepository.deleteByReceitaId(id);
	}

	@Override
	public List<ReceitaIngrediente> findByReceitaId(Long id) {
		return this.recIngRepository.findByReceitaId(id);
	}
}
