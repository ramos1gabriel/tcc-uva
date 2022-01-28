package com.tcc.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tcc.api.entity.Receita;

public interface ReceitaRepository extends JpaRepository<Receita, Long> {
	
	Receita findByNome(String nome);
	
	@Query("SELECT COUNT(*) FROM Receita rec, ReceitaIngrediente recing WHERE rec.id = recing.receita.id and rec.id = ?1")
	Integer countIngredientePorReceita(Long id);
}