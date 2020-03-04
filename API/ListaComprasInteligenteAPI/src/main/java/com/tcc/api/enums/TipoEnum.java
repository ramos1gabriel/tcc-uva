package com.tcc.api.enums;

public enum TipoEnum {
	
	C, //Cobertura
	M, //Massa
	R; //Recheio
	
	public static TipoEnum getCategoria(String categoria) {
		switch(categoria) {
			case "Cobertura":
				return C;
			case "Massa":
				return M;
			case "Recheio":
				return R;
			default:
				return null;
		}
	}
}
