package com.tcc.api.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name="listacompra")
public class ListaCompra {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ID")
	private Long id;
    
    @ManyToOne
    @JoinColumn(name = "CARDAPIO_ID", foreignKey = @ForeignKey(name = "FK_LISTA_CARDAPIO"), nullable = false)
    private CardapioSemanal cardapio;
    
    @Column(name = "ITEM", nullable = false)
    private String item;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public CardapioSemanal getCardapio() {
		return cardapio;
	}
	
	public void setCardapio(CardapioSemanal cardapio) {
		this.cardapio = cardapio;
	}
	
	public String getItem() {
		return item;
	}
	
	public void setItem(String item) {
		this.item = item;
	}
}
