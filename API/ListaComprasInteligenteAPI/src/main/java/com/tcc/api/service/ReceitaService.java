package com.tcc.api.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.tcc.api.entity.Receita;

public interface ReceitaService {
	
	Receita findByNome(String nome);
	
	Receita createOrUpdate(Receita receita);
	
	Receita findById(Long id);
	
	void delete(Long id);
	
	Page<Receita> findAll(int page, int count);
	
	Integer countIngredientePorReceita(Long id);
	
	List<Receita> findAll();
}
