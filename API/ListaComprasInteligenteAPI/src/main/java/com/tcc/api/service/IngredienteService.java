package com.tcc.api.service;

import org.springframework.data.domain.Page;

import com.tcc.api.entity.Ingrediente;

public interface IngredienteService {
	
	Ingrediente findByNome(String nome);
	
	Ingrediente createOrUpdate(Ingrediente ingrediente);
	
	Ingrediente findById(String id);
	
	void delete(String id);
	
	Page<Ingrediente> findAll(int page, int count);
}
