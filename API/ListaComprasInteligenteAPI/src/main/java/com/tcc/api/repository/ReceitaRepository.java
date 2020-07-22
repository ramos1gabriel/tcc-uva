package com.tcc.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tcc.api.entity.Receita;

public interface ReceitaRepository extends JpaRepository<Receita, Long> {
	
	Receita findByNome(String nome);
	
//	Page<Receita> findByNomeIgnoreCaseContainingOrderByNomeDesc(String nome, Pageable pages);
	
	//Page<ReceitaDTO> findAllPesquisa(Pageable pages);
	
	/*SELECT COUNT(*) AS quantidade 
	FROM RECEITA REC,RECEITA_INGREDIENTES RECING 
	WHERE REC.ID = RECING.RECEITA_ID 
	AND REC.ID = 10*/
	@Query("SELECT COUNT(*) FROM Receita rec, ReceitaIngrediente recing WHERE rec.id = recing.receita.id and rec.id = ?1")
	Integer countIngredientePorReceita(Long id);
}