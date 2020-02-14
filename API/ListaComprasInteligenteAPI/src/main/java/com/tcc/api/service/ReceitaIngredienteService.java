package com.tcc.api.service;

import org.springframework.data.domain.Page;

import com.tcc.api.entity.ReceitaIngredientes;

public interface ReceitaIngredienteService {
	
	ReceitaIngredientes createOrUpdate(ReceitaIngredientes recIng);
	
	ReceitaIngredientes findById(Long id);
	
	void delete(Long id);
	
	Page<ReceitaIngredientes> findAll(int page, int count);
}
