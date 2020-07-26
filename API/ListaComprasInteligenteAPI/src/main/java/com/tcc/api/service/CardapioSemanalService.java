package com.tcc.api.service;

import com.tcc.api.entity.CardapioSemanal;

public interface CardapioSemanalService {
	
	CardapioSemanal findByDataCriacao(java.util.Date data);
	
	CardapioSemanal createOrUpdate(CardapioSemanal cardapiosemanal);
	
	CardapioSemanal findById(Long id);
	
	void delete(Long id);
}
