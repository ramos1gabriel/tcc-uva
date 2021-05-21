package com.tcc.api.service.impl;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.sql.Connection;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tcc.api.entity.ListaCompra;
import com.tcc.api.repository.ListaCompraRepository;
import com.tcc.api.service.ListaCompraService;

import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;

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

	@Override
	public void deleteByCardapioId(Long id) {
		this.listacompraRepository.deleteByCardapioId(id);
	}
}
