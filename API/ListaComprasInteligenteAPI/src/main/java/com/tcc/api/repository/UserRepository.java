package com.tcc.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.tcc.api.entity.Usuario;

public interface UserRepository extends MongoRepository<Usuario, String> {
	
	Usuario findByEmail(String email);
	
	
}