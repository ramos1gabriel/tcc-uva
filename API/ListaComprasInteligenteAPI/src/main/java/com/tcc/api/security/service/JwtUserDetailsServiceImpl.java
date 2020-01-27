package com.tcc.api.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.tcc.api.entity.Usuario;
import com.tcc.api.security.jwt.JwtUserFactory;
import com.tcc.api.service.UsuarioService;

@Service
public class JwtUserDetailsServiceImpl implements UserDetailsService {
	
	@Autowired
	private UsuarioService userService;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		
		Usuario user = userService.findByEmail(email);
		if(user == null) {
			throw new UsernameNotFoundException(String.format("Nenhum usuario encontrado com nome de %s", email));
		} else {
			return JwtUserFactory.create(user);
		}
	}
}
