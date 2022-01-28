package com.tcc.api.service;

import java.io.IOException;
import java.sql.Connection;
import java.util.Map;

import net.sf.jasperreports.engine.JRException;

public interface JasperService {
	byte[] gerarPDF(Connection connection, String nomeRelatorio, Map parametros) throws JRException, IOException;
}
