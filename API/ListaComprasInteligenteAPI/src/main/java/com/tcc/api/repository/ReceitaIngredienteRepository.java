package com.tcc.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.tcc.api.entity.ReceitaIngrediente;

public interface ReceitaIngredienteRepository extends JpaRepository<ReceitaIngrediente, Long> {
	
	@Modifying
	@Query("DELETE FROM ReceitaIngrediente recing WHERE recing.receita.id = ?1")
	void deleteByReceitaId(Long id);
	
	@Query("SELECT recing FROM ReceitaIngrediente recing WHERE recing.receita.id = ?1")
	List<ReceitaIngrediente> findByReceitaId(Long id);
}