package com.tcc.api.enums;

//import javax.measure.MetricPrefix;
//import javax.measure.Unit;
//import javax.measure.quantity.Length;
//import javax.measure.quantity.Volume;
//
//import tec.units.ri.unit.Units;

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
	
	/*
	 * CRIAR UM TRATAMENTO Q RETORNE AS UNIDADES DE MEDIDA DAS BIBLIOTECAS API
	 * 
	 * javax.measure.MetricPrefix
	 * tec.units.ri.unit.Units
	 * https://stackoverflow.com/questions/63195863/us-imperial-units-with-javas-units-of-measurement-api
	 * https://brasilescola.uol.com.br/quimica/unidades-medida.htm
	 * https://www.baeldung.com/javax-measure
	 * http://unitsofmeasurement.github.io/pages/about.html
	 * 
	 * 
		case "Xícara(s)": >>DEFINIR QUANTO É DPS RETORNAR
		return XCR; =250 ml
		case "Colher(es)": >>DEFINIR QUANTO É DPS RETORNAR
		return COL; =15 ml
		
		return K; =KILO
		return KG; =KILOGRAM
		return G; =GRAM
		return MG; =Unit<Length> milligram = MetricPrefix.MILLI(GRAM)
		
		return L; =LITRE
		return ML; =Unit<Length> millilitre = MetricPrefix.MILLI(LITRE)
		
		return M; =METRE
		return CM; =Unit<Length> centimeter = MetricPrefix.CENTI(METRE);
		return MM; =Unit<Length> millimeter = MetricPrefix.MILLI(METRE)
		
		return UNI; =nesse caso retorna direto pra lista de compra (COMPRAR UMA UNIDADE)
	*/
	/*public static Unit<?> getUnitAPI(UnidadeMedidaEnum status) {
		switch(status) {
			case XCR:
				return MetricPrefix.MILLI(Units.LITRE);
			case COL:
				return MetricPrefix.MILLI(Units.LITRE);
			case K:
				return MetricPrefix.KILO;
			case KG:
				return KG;
			case G:
				return G;
			case MG:
				return MG;
			case L:
				return L;
			case ML:
				return ML;
			case M:
				return M;
			case CM:
				return CM;
			case MM:
				return MM;
			default:
				return null;
		}
	}*/
}
