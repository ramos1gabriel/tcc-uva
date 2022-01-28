package com.tcc.api.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tcc.api.entity.Ingrediente;

public interface IngredienteRepository extends JpaRepository<Ingrediente, Long> {
	
	Ingrediente findByNome(String nome);
	
	Page<Ingrediente> findByNomeIgnoreCaseContainingOrderByNomeDesc(String nome, Pageable pages);
	
	List<Ingrediente> findAll();
	
	@Query("SELECT rec.nome FROM Receita rec, ReceitaIngrediente recing WHERE rec.id = recing.receita.id and recing.ingrediente.id = ?1")
	List<String> findReceitaNomeInRecIng(Long id);
}