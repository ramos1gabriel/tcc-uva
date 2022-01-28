package com.tcc.api.entity;

import java.math.BigDecimal;

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
@Table(name="receitaingrediente")
public class ReceitaIngrediente {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ID")
	private Long id;
	
	@Column(name = "OBSERVACAO", length = 100, nullable = true)
    private String observacao;
    
    @ManyToOne
    @JoinColumn(name = "RECEITA_ID", foreignKey = @ForeignKey(name = "FK_REC_ING_RECEITA"), nullable = false)
    private Receita receita;
    
    @ManyToOne
    @JoinColumn(name = "INGREDIENTE_ID", foreignKey = @ForeignKey(name = "FK_REC_ING_INGREDIENTE"), nullable = false)
    private Ingrediente ingrediente;
    
    @Column(name = "QTD", nullable = false)
    private BigDecimal quantidade; 
    
    @Enumerated(value = EnumType.STRING)
    @Column(columnDefinition="CHAR(5)", name = "UNIDADE_MEDIDA", nullable = false)
    private UnidadeMedidaEnum unidadeMedida;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getObservacao() {
		return observacao;
	}

	public void setObservacao(String observacao) {
		this.observacao = observacao;
	}

	public Receita getReceita() {
		return receita;
	}

	public void setReceita(Receita receita) {
		this.receita = receita;
	}
	
	public BigDecimal getQuantidade() {
		return quantidade;
	}
	
	public void setQuantidade(BigDecimal quantidade) {
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
	
	public Long getIngredienteId() {
		return ingrediente.getId();
	}
}
