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
	
//	@JsonIgnore
//    @OneToMany(mappedBy = "receita_ingrediente", fetch=FetchType.LAZY)
//    //@Cascade({org.hibernate.annotations.CascadeType.ALL, org.hibernate.annotations.CascadeType.DELETE_ORPHAN})
//    //@OrderBy(clause = "AS_OFF_DATE")
//    private List<ReceitaIngrediente> receitasIngredientes;

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
	
//	public List<ReceitaIngrediente> getReceitasIngredientes() {
//		return receitasIngredientes;
//	}
//	
//	public void setReceitasIngredientes(List<ReceitaIngrediente> receitasIngredientes) {
//		this.receitasIngredientes = receitasIngredientes;
//	}
}
