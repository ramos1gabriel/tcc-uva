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
@Table(name="categoria")
public class Categoria {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ID")
	private Long id;
	
	@NotBlank(message = "Nome obrigatorio!")
	@Column(name = "NOME", length = 50, nullable = false)
    private String nome;
	
	@Column(name = "DESCRICAO", length = 100, nullable = true)
    private String descricao;
	
	@JsonIgnore
    @OneToMany(mappedBy = "categoria", fetch=FetchType.LAZY)
    //@Cascade({org.hibernate.annotations.CascadeType.ALL, org.hibernate.annotations.CascadeType.DELETE_ORPHAN})
    //@OrderBy(clause = "AS_OFF_DATE")
    private List<Receita> receitas;
    
    public Categoria() {}
    
    public Categoria(Long id, String nome, String descricao, List<Receita> receitas) {
		super();
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.receitas = receitas;
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
	
	public String getDescricao() {
		return descricao;
	}
	
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	public List<Receita> getReceitas() {
		return receitas;
	}
	
	public void setReceitas(List<Receita> receitas) {
		this.receitas = receitas;
	}
	
	@Override
    public String toString() {
        return "Categoria [id=" + getId() + ", nome=" + getNome() + ", descricao=" + getDescricao() + "]";
    }
}
