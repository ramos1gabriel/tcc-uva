package com.tcc.api.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

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
	
//	public ProfileEnum getProfile() {
//		return profile;
//	}
//	
//	public void setProfile(ProfileEnum profile) {
//		this.profile = profile;
//	}
}
