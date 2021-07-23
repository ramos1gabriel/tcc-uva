package com.tcc.api.util;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;

public class DataUtils {
	
	private static ZoneId getZone() {
		return ZoneId.systemDefault();
	}
	
	private static ZonedDateTime getZonedDateTime(Instant instant) {
		return instant.atZone(getZone());
	}
	
	public static LocalDate utilDateToLocalDate(java.util.Date dataUtil) {
		Instant instant = dataUtil.toInstant();
		return getZonedDateTime(instant).toLocalDate();
	}
	
	public static LocalDate sqlDateToLocalDate(java.sql.Date dataSql) {
		Instant instant = dataSql.toInstant();
		return getZonedDateTime(instant).toLocalDate();
	}
}
