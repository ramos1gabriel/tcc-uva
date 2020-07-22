package com.tcc.api.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tcc.api.enums.CategoriaEnum;


@Entity
@Table(name="receita")
public class Receita {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ID")
	private Long id;
	
	@NotBlank(message = "Nome obrigatorio!")
	@Column(name = "NOME", length = 50, nullable = false, unique = true)
    private String nome;
    
    @Column(name = "DESCRICAO", length = 250, nullable = true)
    private String descricao;
    
    @NotNull
    @Enumerated(value = EnumType.STRING)
    @Column(name = "CATEGORIA", length = 100, nullable = false)
    private CategoriaEnum categoria;
    
    @JsonIgnore
    @OneToMany(mappedBy = "receita", fetch=FetchType.LAZY)
    private List<ReceitaIngrediente> receitaIngredientes;
    
    @JsonIgnore
    //cascade = CascadeType.ALL
    @OneToMany(mappedBy = "receita", fetch=FetchType.LAZY)
    private List<ModoPreparo> modopreparo;
    
    public Receita() {}
    
    public Receita(Long id, String nome, String descricao, CategoriaEnum categoria) {
		super();
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.categoria = categoria;
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
	
	public List<ReceitaIngrediente> getReceitaIngredientes() {
		return receitaIngredientes;
	}
	
	public void setReceitaIngredientes(List<ReceitaIngrediente> receitaIngredientes) {
		this.receitaIngredientes = receitaIngredientes;
	}
	
	public List<ModoPreparo> getModopreparo() {
		return modopreparo;
	}
	
	public void setModopreparo(List<ModoPreparo> modopreparo) {
		this.modopreparo = modopreparo;
	}
	
	public CategoriaEnum getCategoria() {
		return categoria;
	}
	
	public void setCategoria(CategoriaEnum categoria) {
		this.categoria = categoria;
	}
	
//	@Override
//    public String toString() {
//        return "Categoria [id=" + getId() + ", nome=" + getNome() + ", descricao=" + getDescricao() + "]";
//    }
}
