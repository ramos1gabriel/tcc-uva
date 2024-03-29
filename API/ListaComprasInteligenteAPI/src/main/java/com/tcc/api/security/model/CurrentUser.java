package com.tcc.api.security.model;

import com.tcc.api.entity.Usuario;

public class CurrentUser {
	
	private String token;
	private Usuario user;
	
	public CurrentUser(String token, Usuario user) {
		this.token = token;
		this.user = user;
	}
	
	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public Usuario getUser() {
		return user;
	}

	public void setUser(Usuario user) {
		this.user = user;
	}
	
	
}
