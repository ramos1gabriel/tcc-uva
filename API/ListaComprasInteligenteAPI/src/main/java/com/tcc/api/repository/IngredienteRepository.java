package com.tcc.api.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.tcc.api.entity.Ingrediente;

public interface IngredienteRepository extends JpaRepository<Ingrediente, Long> {
	
	Ingrediente findByNome(String nome);
	
	Page<Ingrediente> findByNomeIgnoreCaseContainingOrderByNomeDesc(String nome, Pageable pages);
}