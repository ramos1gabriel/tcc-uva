package com.tcc.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tcc.api.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, String> {
	
	Usuario findByUsername(String username);
}