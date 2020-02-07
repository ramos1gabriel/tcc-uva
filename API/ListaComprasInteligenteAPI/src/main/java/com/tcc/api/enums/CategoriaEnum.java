package com.tcc.api.enums;

public enum CategoriaEnum {
	
	Bolos_tortas_doces("Bolos e tortas doces"),
	Carnes("Carnes"),
	Peixes_frutos_mar("Peixes e frutos do mar"),
	Saladas_molhos_acompanhamentos("Saladas, molhos e acompanhamentos"),
	Sopas("Sopas"),
	Bebidas("Bebidas"),
	Doces_sobremesas("Doces e sobremesas"),
	Lanches("Lanches"),
	Alimentacao_saudavel("Alimentação Saudável"),
	Outros("Outros");
	
	private String descricao;
	 
	CategoriaEnum(String descricao) {
        this.descricao = descricao;
    }
 
    public String getDescricao() {
        return descricao;
    }
	
//	public static CategoriaEnum getStatus(String status) {
//		switch(status) {
//			case "Bolos e tortas doces":
//				return XCR;
//			case "Carnes":
//				return COL;
//			case "Peixes e frutos do mar":
//				return K;
//			case "Quilograma(s)":
//				return KG;
//			case "Grama(s)":
//				return G;
//			case "Miligrama(s)":
//				return MG;
//			case "Litro(s)":
//				return L;
//			case "Mililitro(s)":
//				return ML;
//			case "Metro(s)":
//				return M;
//			case "Centímetro(s)":
//				return CM;
//			case "Milímetro(s)":
//				return MM;
//			default:
//				return SEM_CATEGORIA;
//		}
//	}
}
