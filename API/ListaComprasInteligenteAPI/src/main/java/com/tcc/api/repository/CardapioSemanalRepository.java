package com.tcc.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tcc.api.entity.CardapioSemanal;

public interface CardapioSemanalRepository extends JpaRepository<CardapioSemanal, Long> {
	
	List<CardapioSemanal> findAll();

	@Query("SELECT car FROM CardapioSemanal car WHERE car.dataCriacao LIKE ?1")
	CardapioSemanal findByDataCriacao(java.util.Date data);
}