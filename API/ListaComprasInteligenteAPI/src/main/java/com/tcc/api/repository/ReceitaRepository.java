package com.tcc.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tcc.api.entity.Receita;

public interface ReceitaRepository extends JpaRepository<Receita, Long> {
	
	Receita findByNome(String nome);
	
//	Page<Receita> findByNomeIgnoreCaseContainingOrderByNomeDesc(String nome, Pageable pages);
	
	//@Query("SELECT rec.nome FROM Receita rec, ReceitaIngredientes recing WHERE rec.id = recing.receita.id and recing.ingrediente.id = ?1")
	//criar pesquisa do receita
}