package com.tcc.api.service;

import org.springframework.data.domain.Page;

import com.tcc.api.entity.Usuario;

public interface UsuarioService {
	
	Usuario findByUsername(String username);
	
	Usuario createOrUpdate(Usuario user);
	
	Usuario findById(String id);
	
	void delete(String id);
	
	Page<Usuario> findAll(int page, int count);
}
