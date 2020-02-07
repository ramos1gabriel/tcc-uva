package com.tcc.api.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
	
	@JsonIgnore
	@OneToMany(mappedBy = "receita", fetch=FetchType.LAZY)
    private List<ReceitaIngredientes> receitaIngredientes;
	
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
	
	public List<ReceitaIngredientes> getReceitaIngredientes() {
		return receitaIngredientes;
	}
	
	public void setReceitaIngredientes(List<ReceitaIngredientes> receitaIngredientes) {
		this.receitaIngredientes = receitaIngredientes;
	}
}
