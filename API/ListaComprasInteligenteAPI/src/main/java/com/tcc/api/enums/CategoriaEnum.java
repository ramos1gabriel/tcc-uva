package com.tcc.api.enums;

public enum CategoriaEnum {
	
	bolos_tortas_doces,
	carnes,
	peixes_frutos_mar,
	saladas_molhos_acompanhamentos,
	sopas,
	bebidas,
	doces_sobremesas,
	lanches,
	alimentacao_saudavel,
	outros;
	
//	Bolos_tortas_doces("Bolos e tortas doces"),
//	Carnes("Carnes"),
//	Peixes_frutos_mar("Peixes e frutos do mar"),
//	Saladas_molhos_acompanhamentos("Saladas, molhos e acompanhamentos"),
//	Sopas("Sopas"),
//	Bebidas("Bebidas"),
//	Doces_sobremesas("Doces e sobremesas"),
//	Lanches("Lanches"),
//	Alimentacao_saudavel("Alimentação Saudável"),
//	Outros("Outros");
	
//	private String descricao;
//	 
//	CategoriaEnum(String descricao) {
//        this.descricao = descricao;
//    }
// 
//    public String getDescricao() {
//        return descricao;
//    }
	
	public static CategoriaEnum getCategoria(String categoria) {
		switch(categoria) {
			case "Bolos e tortas doces":
				return bolos_tortas_doces;
			case "Carnes":
				return carnes;
			case "Peixes e frutos do mar":
				return peixes_frutos_mar;
			case "Saladas, molhos e acompanhamentos":
				return saladas_molhos_acompanhamentos;
			case "Sopas":
				return sopas;
			case "Bebidas":
				return bebidas;
			case "Doces e sobremesas":
				return doces_sobremesas;
			case "Lanches":
				return lanches;
			case "Alimentação Saudável":
				return alimentacao_saudavel;
			case "Outros":
				return outros;
			default:
				return null;
		}
	}
}
