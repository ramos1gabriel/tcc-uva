package com.tcc.api.security.jwt;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.tcc.api.entity.Usuario;
import com.tcc.api.enums.ProfileEnum;

public class JwtUserFactory {
	
	private JwtUserFactory() {}
	
	//Cria um jwt do usuario logado
	public static JwtUser create(Usuario usuario) {
		return new JwtUser(usuario.getId(), usuario.getUsername(), usuario.getSenha(), mapToGrantedAuthorities(ProfileEnum.ROLE_ADMIN));
	}

	//Converte o perfil do usuario para o formato usado pelo spring security
	private static List<? extends GrantedAuthority> mapToGrantedAuthorities(ProfileEnum profileEnum) {
		List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		authorities.add(new SimpleGrantedAuthority(profileEnum.toString()));
		return authorities;
	}
}
