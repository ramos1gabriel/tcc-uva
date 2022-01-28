package com.tcc.api.dto;

import java.time.LocalDate;

public class ListaCompra implements Comparable<ListaCompra> {
	
	private Long id;
	private LocalDate dataCriacao;
    private String item;
    
    public ListaCompra() {}
    
    public ListaCompra(Long id, LocalDate dataCriacao, String item) {
		super();
		this.id = id;
		this.dataCriacao = dataCriacao;
		this.item = item;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public LocalDate getDataCriacao() {
		return dataCriacao;
	}
	
	public void setDataCriacao(LocalDate dataCriacao) {
		this.dataCriacao = dataCriacao;
	}
	
	public String getItem() {
		return item;
	}
	
	public void setItem(String item) {
		this.item = item;
	}

	@Override
	public int compareTo(ListaCompra o) {
		return getItem().compareToIgnoreCase(o.getItem());
	}
}
