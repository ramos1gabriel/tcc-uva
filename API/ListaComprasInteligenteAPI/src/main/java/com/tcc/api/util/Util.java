package com.tcc.api.util;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Random;

/**
 * Classe de utilitarios
 *
 */
public class Util {
	public static boolean blankOrNull(String str) {
		return "".equals(str) || str == null;
	}
	
	public static java.time.LocalDate stringToLocalDate(String data) {
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		LocalDate localDate = LocalDate.parse(data, formatter);
		return localDate;
	}
	
	private static Integer generateNumber() {
		Random random = new Random();
		return random.nextInt(9999);
	}
}
