package com.tcc.api.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.tcc.api.entity.Usuario;
import com.tcc.api.repository.UsuarioRepository;
import com.tcc.api.service.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;

	@Override
	public Usuario findByUsername(String username) {
		return this.usuarioRepository.findByUsername(username);
	}

	@Override
	public Usuario createOrUpdate(Usuario user) {
		return this.usuarioRepository.save(user);
	}

	@Override
	public Usuario findById(Long id) {
		return this.usuarioRepository.findById(id).orElse(null); //findOne nao funciona da mesma forma q antes no SPRING 2
	}

	@Override
	public void delete(Long id) {
		this.usuarioRepository.deleteById(id); //delete nao funciona da mesma forma q antes no SPRING 2
	}

	@Override
	public Page<Usuario> findAll(int page, int count) {
		Pageable pages = PageRequest.of(page, count); //contrutor de PageRequest esta deprecated no SPRING 2, trocar por .of
		return this.usuarioRepository.findAll(pages);
	}
	
}
