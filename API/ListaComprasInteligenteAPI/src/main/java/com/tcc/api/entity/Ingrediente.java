package com.tcc.api.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="ingrediente")
public class Ingrediente {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ID")
	private Long id;
	
	@NotBlank(message = "Nome obrigatorio!")
	@Column(name = "NOME", length = 50, nullable = false)
	private String nome;
	
//	@ManyToOne
//    @JoinColumn(name = "RECEITA_INGREDIENTE_ID", foreignKey = @ForeignKey(name = "FK_RECEITA_INGREDIENTE"), nullable = false)
//    private ReceitaIngrediente receitaIngrediente;

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
	
//	public ReceitaIngrediente getReceitaIngrediente() {
//		return receitaIngrediente;
//	}
//	
//	public void setReceitaIngrediente(ReceitaIngrediente receitaIngrediente) {
//		this.receitaIngrediente = receitaIngrediente;
//	}
}
