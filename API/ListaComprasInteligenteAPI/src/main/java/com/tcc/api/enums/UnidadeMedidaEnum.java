package com.tcc.api.enums;

public enum UnidadeMedidaEnum {
	
	XCR,
	COL,
	K,
	KG,
	G,
	MG,
	L,
	ML,
	M,
	CM,
	MM,
	UNI;
	
//	XCR("Xícara(s)"),
//	COL("Colher(es)"),
//	AGOSTO("a gosto"),
//	UN("Unidade(s)"),
//	K("Quilo(s)"),
//    KG("Quilograma(s)"),
//    G("Grama(s)"),
//	MG("Miligrama(s)"),
//	L("Litro(s)"),
//	ML("Mililitro(s)"),
//	M("Metro(s)"),
//	CM("Centímetro(s)"),
//	MM("Milímetro(s)");
	
	public static UnidadeMedidaEnum getStatus(String status) {
		switch(status) {
			case "Xícara(s)":
				return XCR;
			case "Colher(es)":
				return COL;
			case "Quilo(s)":
				return K;
			case "Quilograma(s)":
				return KG;
			case "Grama(s)":
				return G;
			case "Miligrama(s)":
				return MG;
			case "Litro(s)":
				return L;
			case "Mililitro(s)":
				return ML;
			case "Metro(s)":
				return M;
			case "Centímetro(s)":
				return CM;
			case "Milímetro(s)":
				return MM;
			default:
				return UNI;
		}
	}
}
