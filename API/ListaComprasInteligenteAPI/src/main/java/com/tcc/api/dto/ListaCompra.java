package com.tcc.api.dto;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.tcc.api.entity.CardapioSemanal;


//@Entity
//@Table(name="listacompra")
public class ListaCompra implements Comparable<ListaCompra> {
	
//	@Id
//  @GeneratedValue(strategy = GenerationType.IDENTITY)
//	@Column(name="ID")
	private Long id;
	
	private LocalDate dataCriacao;
    
//    @ManyToOne
//    @JoinColumn(name = "CARDAPIO_ID", foreignKey = @ForeignKey(name = "FK_LISTA_CARDAPIO"), nullable = false)
//    private CardapioSemanal cardapio;
    
//    @Column(name = "ITEM", nullable = false)
    private String item;
    
    public ListaCompra() {}
    
    public ListaCompra(Long id, LocalDate dataCriacao, String item) {
		super();
		this.id = id;
		this.dataCriacao = dataCriacao;
		this.item = item;
	}

//	public ListaCompra(Long id, CardapioSemanal cardapio, String item) {
//		super();
//		this.id = id;
//		this.cardapio = cardapio;
//		this.item = item;
//	}

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
	
//	public CardapioSemanal getCardapio() {
//		return cardapio;
//	}
//	
//	public void setCardapio(CardapioSemanal cardapio) {
//		this.cardapio = cardapio;
//	}
	
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
