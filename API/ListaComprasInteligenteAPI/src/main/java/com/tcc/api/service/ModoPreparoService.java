package com.tcc.api.service;

import com.tcc.api.entity.ModoPreparo;

public interface ModoPreparoService {
	
	ModoPreparo createOrUpdate(ModoPreparo modopreparo);
	
	ModoPreparo findById(Long id);
	
	void delete(Long id);
	
	void deleteByReceitaId(Long id);
	
	ModoPreparo findByReceitaId(Long id);
}
