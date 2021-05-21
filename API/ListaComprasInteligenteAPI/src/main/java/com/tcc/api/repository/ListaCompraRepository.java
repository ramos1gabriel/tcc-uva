package com.tcc.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.tcc.api.entity.ListaCompra;

public interface ListaCompraRepository extends JpaRepository<ListaCompra, Long> {
	
	@Transactional
	@Modifying
	@Query("DELETE FROM ListaCompra lista WHERE lista.cardapio.id = ?1")
	void deleteByCardapioId(Long id);
	
	@Query("SELECT lista FROM ListaCompra lista WHERE lista.cardapio.id = ?1")
	List<ListaCompra> findAllByCardapio(Long id);
}