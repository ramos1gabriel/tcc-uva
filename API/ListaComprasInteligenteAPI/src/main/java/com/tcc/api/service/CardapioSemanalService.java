package com.tcc.api.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.tcc.api.entity.CardapioSemanal;

public interface CardapioSemanalService {
	
	List<CardapioSemanal> findAllByDataCriacao(java.sql.Date data);
	
	CardapioSemanal createOrUpdate(CardapioSemanal cardapiosemanal);
	
	CardapioSemanal findById(Long id);
	
	void delete(Long id);
	
	Page<CardapioSemanal> findAll(int page, int count);
}
