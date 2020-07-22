package com.tcc.api.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.tcc.api.entity.ReceitaIngrediente;

public interface ReceitaIngredienteService {
	
	ReceitaIngrediente createOrUpdate(ReceitaIngrediente recIng);
	
	List<ReceitaIngrediente> createOrUpdateAll(List<ReceitaIngrediente> listRecIng);
	
	ReceitaIngrediente findById(Long id);
	
	void delete(Long id);
	
	Page<ReceitaIngrediente> findAll(int page, int count);
	
	void deleteByReceitaId(Long id);
	
	List<ReceitaIngrediente> findByReceitaId(Long id);
}
