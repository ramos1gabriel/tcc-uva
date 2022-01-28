package com.tcc.api.service.impl;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.sql.Connection;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.tcc.api.service.JasperService;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;

@Service
public class JasperServiceImpl implements JasperService {
	
	@Override
	public byte[] gerarPDF(Connection connection, String nomeRelatorio, Map parametros) throws JRException, IOException {
		
		String file = getClass().getClassLoader().getResource("jasper/"+nomeRelatorio+".jrxml").getFile();
		
		JasperReport jasperReport = JasperCompileManager.compileReport(file);
		JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parametros, connection);
		
		ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
	    JasperExportManager.exportReportToPdfStream(jasperPrint, byteArrayOutputStream);
	    
	    return byteArrayOutputStream.toByteArray();
	}
}
