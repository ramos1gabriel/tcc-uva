package com.tcc.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.tcc.api.controller.ListaCompraController;
import com.tcc.api.entity.Usuario;
import com.tcc.api.repository.UsuarioRepository;

@SpringBootApplication
public class APIApplication {
	
	private static final Logger LOG = LoggerFactory.getLogger(ListaCompraController.class);

	public static void main(String[] args) {
		LOG.info("Iniciando aplicacao..");
		SpringApplication.run(APIApplication.class, args);
	}
	
	@Bean
	CommandLineRunner init(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder) {
		return args -> {
			initUsers(usuarioRepository, passwordEncoder);
		};
	}
	
	//CRIA USUARIO ADMIN
	private void initUsers(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder) {
		
		LOG.info("Criando usuario admin..");
		
		Usuario admin = new Usuario();
		admin.setNome("Administrador");
		admin.setEmail("admin@email.com");
		admin.setUsername("admin");
		admin.setSenha(passwordEncoder.encode("admin@123"));
		admin.setImagem(1);
		//admin.setProfile(ProfileEnum.ROLE_ADMIN);
		
		Usuario usuario = usuarioRepository.findByUsername(admin.getUsername());
		if(usuario == null) {
			usuarioRepository.save(admin);
		}
	}
}

/**
ORDEM CRIACAO:
- entity
- repository
- service
- service impl
- controller
*/