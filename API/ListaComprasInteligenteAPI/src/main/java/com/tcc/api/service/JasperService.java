package com.tcc.api.service;

import java.io.IOException;
import java.sql.Connection;
import java.util.Map;

import net.sf.jasperreports.engine.JRException;

public interface JasperService {
	
//	ListaCompra createOrUpdate(ListaCompra recIng);
	
//	List<ListaCompra> saveAll(List<ListaCompra> listRecIng);
	
//	void deleteByCardapioId(Long id);
	
//	ListaCompra findById(Long id);
	
//	void delete(Long id);
	
//	Page<ListaCompra> findAll(int page, int count);
	
//	void deleteByReceitaId(Long id);
	
//	List<ListaCompra> findAllByCardapio(Long id);

	byte[] gerarPDF(Connection connection, String nomeRelatorio, Map parametros) throws JRException, IOException;
}
