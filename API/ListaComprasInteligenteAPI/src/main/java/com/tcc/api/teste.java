package com.tcc.api;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.Month;
import java.time.ZoneId;
import java.time.ZonedDateTime;

public class teste {
	public static void main(String args[]) {
		LocalDateTime data = LocalDateTime.now();
		System.out.println(data);

//		ZoneId fusoHorarioDeSaoPaulo = ZoneId.of("America/Sao_Paulo");
//		ZonedDateTime horaSaoPaulo = ZonedDateTime.of(hora, fusoHorarioDeSaoPaulo);
//		System.out.println(horaSaoPaulo);
//
//		ZoneId fusoHorarioDeParis = ZoneId.of("Europe/Paris");
//		ZonedDateTime horaParis = ZonedDateTime.of(hora, fusoHorarioDeParis);
//		System.out.println(horaParis);
//
//		Duration diferencaDeHoras = Duration.between(horaSaoPaulo, horaParis);
//		System.out.println(diferencaDeHoras.getSeconds() / 60 / 60);
	}
}
