package com.tcc.api.service.impl;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.tcc.api.entity.Receita;
import com.tcc.api.repository.ReceitaRepository;
import com.tcc.api.service.ReceitaService;

@Service
public class ReceitaServiceImpl implements ReceitaService {
	
	@Autowired
	private ReceitaRepository receitaRepository;

	@Override
	public Receita findByNome(String nome) {
		return this.receitaRepository.findByNome(nome);
	}

	@Override
	public Receita createOrUpdate(Receita ingrediente) {
		return this.receitaRepository.save(ingrediente);
	}

	@Override
	public Receita findById(Long id) {
		return this.receitaRepository.findById(id).orElse(null); //findOne nao funciona da mesma forma q antes no SPRING 2
	}

	@Override
	public void delete(Long id) {
		this.receitaRepository.deleteById(id); //delete nao funciona da mesma forma q antes no SPRING 2
	}

	@Override
	public Page<Receita> findAll(int page, int count) {
		Pageable pages = PageRequest.of(page, count); //contrutor de PageRequest esta deprecated no SPRING 2, trocar por .of
		return this.receitaRepository.findAll(pages);
	}

	@Override
	public Integer countIngredientePorReceita(Long id) {
		return this.receitaRepository.countIngredientePorReceita(id);
	}

	@Override
	public List<Receita> findAll() {
		return this.receitaRepository.findAll();
	}
}
