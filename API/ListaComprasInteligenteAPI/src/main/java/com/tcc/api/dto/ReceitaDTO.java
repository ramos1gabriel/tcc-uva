package com.tcc.api.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ReceitaDTO {
	
	@Id
	private Long id;
	
	@Column(name = "nome")
	private String nome;
	
	@Column(name = "categoria")
	private String categoria;
	
	@Column(name = "quantidade")
	private Integer quantidade;
	
	//default constructor
	public ReceitaDTO() {}
	
	public ReceitaDTO(Long id, String nome, String categoria, Integer quantidade) {
		setId(id);
		setNome(nome);
		setCategoria(categoria);
		setQuantidade(quantidade);
	}
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getNome() {
		return nome;
	}
	
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public String getCategoria() {
		return categoria;
	}
	
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	
	public Integer getQuantidade() {
		return quantidade;
	}
	
	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}
	
	public String getCategoriaFormatado() {
		switch(getCategoria()) {
			case "bolos_tortas_doces":
				return "Bolos e tortas doces";
			case "carnes":
				return "Carnes";
			case "peixes_frutos_mar":
				return "Peixes e frutos do mar";
			case "saladas_molhos_acompanhamentos":
				return "Saladas, molhos e acompanhamentos";
			case "sopas":
				return "Sopas";
			case "bebidas":
				return "Bebidas";
			case "doces_sobremesas":
				return "Doces e sobremesas";
			case "lanches":
				return "Lanches";
			case "alimentacao_saudavel":
				return "Alimentação Saudável";
			case "outros":
				return "Outros";
			default:
				return "";
		}
	}
}
