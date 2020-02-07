package com.tcc.api.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.tcc.api.enums.UnidadeMedidaEnum;


@Entity
@Table(name="receita_ingredientes")
public class ReceitaIngredientes {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ID")
	private Long id;
	
	@Column(name = "DESCRICAO", length = 100, nullable = true)
    private String descricao;
    
    @ManyToOne
    @JoinColumn(name = "RECEITA_ID", foreignKey = @ForeignKey(name = "FK_REC_ING_RECEITA"), nullable = false)
    private Receita receita;
    
    @ManyToOne
    @JoinColumn(name = "INGREDIENTE_ID", foreignKey = @ForeignKey(name = "FK_REC_ING_INGREDIENTE"), nullable = false)
    private Ingrediente ingrediente;
    
    @Column(name = "QTD", nullable = false)
    private Double quantidade;
    
    @Enumerated(value = EnumType.STRING)
    @Column(columnDefinition="CHAR(5)", name = "UNIDADE_MEDIDA", nullable = false)
    private UnidadeMedidaEnum unidadeMedida;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Receita getReceita() {
		return receita;
	}

	public void setReceita(Receita receita) {
		this.receita = receita;
	}

	public Double getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Double quantidade) {
		this.quantidade = quantidade;
	}

	public UnidadeMedidaEnum getUnidadeMedida() {
		return unidadeMedida;
	}

	public void setUnidadeMedida(UnidadeMedidaEnum unidadeMedida) {
		this.unidadeMedida = unidadeMedida;
	}
	
	public Ingrediente getIngrediente() {
		return ingrediente;
	}
	
	public void setIngrediente(Ingrediente ingrediente) {
		this.ingrediente = ingrediente;
	}
}
