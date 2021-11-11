package com.tcc.api.enums;

public enum DiaEnum {
	segunda,
	terca,
	quarta,
	quinta,
	sexta;
	
	public static DiaEnum getDia(String dia) {
		switch(dia) {
			case "segunda":
				return segunda;
			case "terca":
				return terca;
			case "quarta":
				return quarta;
			case "quinta":
				return quinta;
			case "sexta":
				return sexta;
			default:
				return null;
		}
	}
}
