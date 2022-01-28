package com.tcc.api.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tcc.api.entity.ModoPreparo;
import com.tcc.api.repository.ModoPreparoRepository;
import com.tcc.api.service.ModoPreparoService;

@Service
public class ModoPreparoServiceImpl implements ModoPreparoService {
	
	@Autowired
	private ModoPreparoRepository modopreparoRepository;

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

	@Override
	@Transactional
	public void deleteByReceitaId(Long id) {
		this.modopreparoRepository.deleteByReceitaId(id);
	}

	@Override
	public ModoPreparo findByReceitaId(Long id) {
		return this.modopreparoRepository.findByReceitaId(id);
	}
}
