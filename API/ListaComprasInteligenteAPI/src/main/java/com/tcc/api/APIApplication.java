package com.tcc.api;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.tcc.api.entity.Usuario;
import com.tcc.api.repository.UsuarioRepository;

@SpringBootApplication
public class APIApplication {

	public static void main(String[] args) {
		SpringApplication.run(APIApplication.class, args);
	}
	
	@Bean
	CommandLineRunner init(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder) {
		return args -> {
			initUsers(usuarioRepository, passwordEncoder);
		};
	}
	
	//CRIA USUARIO PARA DESENVOLVIMENTO
	private void initUsers(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder) {
		Usuario admin = new Usuario();
		
		admin.setNome("Administrador");
		admin.setEmail("admin@uva.com");
		
		admin.setUsername("admin");
		admin.setSenha(passwordEncoder.encode("admin"));
		//admin.setProfile(ProfileEnum.ROLE_ADMIN);
		
		Usuario usuario = usuarioRepository.findByUsername(admin.getUsername());
		if(usuario == null) {
			usuarioRepository.save(admin);
		}
	}
}

/**
ORDEM CRIACAO SERVICO:

- entity
- repository
- service
- serviceImpl
- controller
*/