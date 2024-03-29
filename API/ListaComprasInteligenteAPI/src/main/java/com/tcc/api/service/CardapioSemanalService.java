package com.tcc.api.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Page;

import com.tcc.api.entity.CardapioSemanal;
import com.tcc.api.enums.DiaEnum;
import com.tcc.api.enums.RefeicaoEnum;

public interface CardapioSemanalService {
	
	List<CardapioSemanal> findAllByDataCriacao(LocalDate data);
	
	List<CardapioSemanal> createOrUpdateAll(List<CardapioSemanal> listCardapio);
	
	CardapioSemanal createOrUpdate(CardapioSemanal cardapiosemanal);
	
	CardapioSemanal findById(Long id);
	
	void delete(Long id);
	
	Page<CardapioSemanal> findAll(int page, int count);
	
	Integer countReceitas(java.time.LocalDate data);
	
	List<CardapioSemanal> findAllGroupByDataCriacao();
	
	void deleteByDataCriacao(java.time.LocalDate data);
	
	void deleteByDiaSemanaAndTipoRefeicaoAndDataCriacao(DiaEnum diaSemana, RefeicaoEnum tipoRefeicao, 
			java.time.LocalDate data);
}
