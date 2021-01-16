package com.tcc.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tcc.api.entity.CardapioSemanal;

public interface CardapioSemanalRepository extends JpaRepository<CardapioSemanal, Long> {
	
	List<CardapioSemanal> findAll();
	
	List<CardapioSemanal> findAllByDataCriacao(java.sql.Date data);
}