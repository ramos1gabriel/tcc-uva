package com.tcc.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tcc.api.entity.ModoPreparo;

public interface ModoPreparoRepository extends JpaRepository<ModoPreparo, Long> {
	
//	ModoPreparo findByNome(String nome);
	
//	Page<Receita> findByNomeIgnoreCaseContainingOrderByNomeDesc(String nome, Pageable pages);
}