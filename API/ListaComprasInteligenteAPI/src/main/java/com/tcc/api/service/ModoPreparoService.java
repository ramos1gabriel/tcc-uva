package com.tcc.api.service;

import com.tcc.api.entity.ModoPreparo;

public interface ModoPreparoService {
	
//	ModoPreparo findByNome(String nome);
	
	ModoPreparo createOrUpdate(ModoPreparo modopreparo);
	
	ModoPreparo findById(Long id);
	
	void delete(Long id);
	
	//Page<ModoPreparo> findAll(int page, int count);
	
	//Page<Receita> findByNomeIgnoreCaseContainingOrderByNomeDesc(int page, int count, String nome);
	
	//criar uma q traga os ingredientes e modo de preparo (DTO?)
	
	void deleteByReceitaId(Long id);
	
	ModoPreparo findByReceitaId(Long id);
}
