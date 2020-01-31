package com.tcc.api.entity;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.tcc.api.enums.UnidadeMedidaEnum;


//@Entity
//@Table(name="usuario")
public class ReceitaIngrediente {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ID")
	private Long id;
	
	@Column(name = "DESCRICAO", length = 100, nullable = true)
    private String descricao;
    
    @ManyToOne
    @JoinColumn(name = "RECEITA__ID", foreignKey = @ForeignKey(name = "FK_RECEITA"), nullable = false)
    private Receita receita;
    
    @Column(name = "QTD", nullable = false)
    private Double quantidade;
    
    @Enumerated(value = EnumType.STRING)
    @Column(columnDefinition="CHAR(2)", name = "UNIDADE_MEDIDA", nullable = false)
    private UnidadeMedidaEnum unidadeMedida;
}
