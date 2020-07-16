package com.tcc.api.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.tcc.api.entity.Ingrediente;

public interface IngredienteService {
	
	Ingrediente findByNome(String nome);
	
	Ingrediente createOrUpdate(Ingrediente ingrediente);
	
	Ingrediente findById(Long id);
	
	void delete(Long id);
	
	Page<Ingrediente> findAll(int page, int count);
	
	Page<Ingrediente> findByNomeIgnoreCaseContainingOrderByDesc(int page, int count, String nome);
	
	List<Ingrediente> findAll();
	
	List<String> findReceitaNomeInRecIng(Long id);
}
