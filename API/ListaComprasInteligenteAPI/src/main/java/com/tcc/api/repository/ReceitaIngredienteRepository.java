package com.tcc.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tcc.api.entity.ReceitaIngredientes;

public interface ReceitaIngredienteRepository extends JpaRepository<ReceitaIngredientes, Long> {
	
}