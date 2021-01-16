package com.tcc.api.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tcc.api.entity.ListaCompra;
import com.tcc.api.repository.ListaCompraRepository;
import com.tcc.api.service.ListaCompraService;

@Service
public class ListaCompraServiceImpl implements ListaCompraService {
	
	@Autowired
	private ListaCompraRepository listacompraRepository;

	@Override
	public List<ListaCompra> saveAll(List<ListaCompra> listRecIng) {
		return this.listacompraRepository.saveAll(listRecIng);
	}

	@Override
	public ListaCompra findById(Long id) {
		return this.listacompraRepository.findById(id).orElse(null);
	}

	@Override
	public List<ListaCompra> findAllByCardapio(Long id) {
		return this.listacompraRepository.findAllByCardapio(id);
	}
}
