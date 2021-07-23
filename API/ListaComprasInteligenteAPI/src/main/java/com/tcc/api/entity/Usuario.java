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
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.hibernate.annotations.ColumnDefault;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="usuario")
public class Usuario {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ID")
	private Long id;
	
	@NotBlank(message = "Nome obrigatorio!")
	@Column(name = "NOME", length = 50, nullable = false)
	private String nome;
	
	@NotBlank(message = "Email obrigatorio!")
	@Email(message = "Email invalido")
	@Column(name = "EMAIL", length = 50, nullable = false)
	private String email;
	
	@NotBlank(message = "Nome de Usuario obrigatorio!")
	@Column(name = "USERNAME", length = 50, nullable = false)
	private String username;
	
	@NotBlank(message = "Senha obrigatoria!")
	@Size(min = 6)
	@Column(name = "SENHA", nullable = false)
	private String senha;
//	private ProfileEnum profile;
	
	@Column(name = "IMAGEM")
	@ColumnDefault(value="1")
	private int imagem;
	
	 @JsonIgnore
    //cascade = CascadeType.ALL
    @OneToMany(mappedBy = "usuario", fetch=FetchType.LAZY)
    private List<Receita> receita;
	 
	public Usuario() {};
	
	public Usuario(Long id, String nome, String email, String username, String senha, int imagem) {
		super();
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.username = username;
		this.senha = senha;
		this.imagem = imagem;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	public int getImagem() {
		return imagem;
	}
	
	public void setImagem(int imagem) {
		this.imagem = imagem;
	}
	
	public List<Receita> getReceita() {
		return receita;
	}
	
	public void setReceita(List<Receita> receita) {
		this.receita = receita;
	}
	
//	public ProfileEnum getProfile() {
//		return profile;
//	}
//	
//	public void setProfile(ProfileEnum profile) {
//		this.profile = profile;
//	}
}
