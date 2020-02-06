package com.tcc.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tcc.api.entity.Ingrediente;

public interface IngredienteRepository extends JpaRepository<Ingrediente, String> {
	
	Ingrediente findByNome(String nome);
}