package com.tcc.api.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.Query;

import com.tcc.api.entity.CardapioSemanal;

public interface CardapioSemanalService {
	
	//@Query(value ="SELECT * FROM CARDAPIOSEMANAL WHERE DATE(DATA_CRIACAO) = DATE(?1)", nativeQuery = true)
	List<CardapioSemanal> findAllByDataCriacao(LocalDate data);
	
	CardapioSemanal createOrUpdate(CardapioSemanal cardapiosemanal);
	
	CardapioSemanal findById(Long id);
	
	void delete(Long id);
	
	Page<CardapioSemanal> findAll(int page, int count);
}
