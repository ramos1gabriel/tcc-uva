package com.tcc.api.service;

import java.util.List;

import com.tcc.api.entity.ListaCompra;

public interface ListaCompraService {
	
//	ListaCompra createOrUpdate(ListaCompra recIng);
	
	List<ListaCompra> saveAll(List<ListaCompra> listRecIng);
	
	ListaCompra findById(Long id);
	
//	void delete(Long id);
	
//	Page<ListaCompra> findAll(int page, int count);
	
//	void deleteByReceitaId(Long id);
	
	List<ListaCompra> findAllByCardapio(Long id);
}
