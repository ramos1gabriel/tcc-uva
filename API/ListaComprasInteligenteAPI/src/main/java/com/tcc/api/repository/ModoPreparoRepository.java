package com.tcc.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.tcc.api.entity.ModoPreparo;

public interface ModoPreparoRepository extends JpaRepository<ModoPreparo, Long> {
	
//	ModoPreparo findByNome(String nome);
	
//	Page<Receita> findByNomeIgnoreCaseContainingOrderByNomeDesc(String nome, Pageable pages);
	
	@Modifying
	@Query("DELETE FROM ModoPreparo modo WHERE modo.receita.id = ?1")
	void deleteByReceitaId(Long id);
	
	@Query("SELECT modo FROM ModoPreparo modo WHERE modo.receita.id = ?1")
	ModoPreparo findByReceitaId(Long id);
}