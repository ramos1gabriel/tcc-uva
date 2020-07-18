package com.tcc.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tcc.api.entity.Receita;

public interface ReceitaRepository extends JpaRepository<Receita, Long> {
	
	Receita findByNome(String nome);
	
//	Page<Receita> findByNomeIgnoreCaseContainingOrderByNomeDesc(String nome, Pageable pages);
	
	//Page<ReceitaDTO> findAllPesquisa(Pageable pages);
}