package com.tcc.api.util;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;

/**
 * Classe para tratar a conversao de datas para LocalDate
 *
 */
public class DataUtils {
	
	//pega zone
	private static ZoneId getZone() {
		return ZoneId.systemDefault();
	}
	
	//pega time zone
	private static ZonedDateTime getZonedDateTime(Instant instant) {
		return instant.atZone(getZone());
	}
	
	//util para localDate
	public static LocalDate utilDateToLocalDate(java.util.Date dataUtil) {
		Instant instant = dataUtil.toInstant();
		return getZonedDateTime(instant).toLocalDate();
	}
	
	//sql para localDate
	public static LocalDate sqlDateToLocalDate(java.sql.Date dataSql) {
		Instant instant = dataSql.toInstant();
		return getZonedDateTime(instant).toLocalDate();
	}
}
