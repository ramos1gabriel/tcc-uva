package com.tcc.api.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tcc.api.entity.ModoPreparo;
import com.tcc.api.repository.ModoPreparoRepository;
import com.tcc.api.service.ModoPreparoService;

@Service
public class ModoPreparoServiceImpl implements ModoPreparoService {
	
	@Autowired
	private ModoPreparoRepository modopreparoRepository;

//	@Override
//	public ModoPreparo findByNome(String nome) {
//		return this.modopreparoRepository.findByNome(nome);
//	}

	@Override
	public ModoPreparo createOrUpdate(ModoPreparo ingrediente) {
		return this.modopreparoRepository.save(ingrediente);
	}

	@Override
	public ModoPreparo findById(Long id) {
		return this.modopreparoRepository.findById(id).orElse(null); //findOne nao funciona da mesma forma q antes no SPRING 2
	}

	@Override
	public void delete(Long id) {
		this.modopreparoRepository.deleteById(id); //delete nao funciona da mesma forma q antes no SPRING 2
	}

//	@Override
//	public Page<Receita> findAll(int page, int count) {
//		Pageable pages = PageRequest.of(page, count); //contrutor de PageRequest esta deprecated no SPRING 2, trocar por .of
//		return this.receitaRepository.findAll(pages);
//	}
	
//	@Override
//	public Page<Ingrediente> findByNomeIgnoreCaseContainingOrderByDesc(int page, int count, String nome) {
//
//		Pageable pages = PageRequest.of(page, count);
//		return this.ingredienteRepository.findByNomeIgnoreCaseContainingOrderByNomeDesc(nome, pages);
//	}
}
