package com.tcc.api.enums;

public enum RefeicaoEnum {
	cafe,
	almoco,
	lanche,
	jantar;
	
	public static RefeicaoEnum getRefeicao(String refeicao) {
		switch(refeicao) {
			case "cafe":
				return cafe;
			case "almoco":
				return almoco;
			case "lanche":
				return lanche;
			case "jantar":
				return jantar;
			default:
				return null;
		}
	}
}
