package com.tcc.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tcc.api.entity.ListaCompra;

public interface ListaCompraRepository extends JpaRepository<ListaCompra, Long> {
	
//	@Modifying
//	@Query("DELETE FROM ReceitaIngrediente recing WHERE recing.receita.id = ?1")
//	void deleteByReceitaId(Long id);
	
	@Query("SELECT lista FROM ListaCompra lista WHERE lista.cardapio.id = ?1")
	List<ListaCompra> findAllByCardapio(Long id);
}