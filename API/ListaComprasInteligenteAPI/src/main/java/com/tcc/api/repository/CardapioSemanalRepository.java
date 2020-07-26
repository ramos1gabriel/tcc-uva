package com.tcc.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tcc.api.entity.CardapioSemanal;

public interface CardapioSemanalRepository extends JpaRepository<CardapioSemanal, Long> {

	CardapioSemanal findByDataCriacao(java.util.Date data);
}