package com.tcc.api.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tcc.api.entity.CardapioSemanal;
import com.tcc.api.repository.CardapioSemanalRepository;
import com.tcc.api.service.CardapioSemanalService;

@Service
public class CardapioSemanalServiceImpl implements CardapioSemanalService {
	
	@Autowired
	private CardapioSemanalRepository cardapiosemanalRepository;

	@Override
	public CardapioSemanal findByDataCriacao(java.util.Date data) {
		return this.cardapiosemanalRepository.findByDataCriacao(data);
	}

	@Override
	public CardapioSemanal createOrUpdate(CardapioSemanal cardapiosemanal) {
		return this.cardapiosemanalRepository.save(cardapiosemanal);
	}

	@Override
	public CardapioSemanal findById(Long id) {
		return this.cardapiosemanalRepository.findById(id).orElse(null); //findOne nao funciona da mesma forma q antes no SPRING 2
	}

	@Override
	public void delete(Long id) {
		this.cardapiosemanalRepository.deleteById(id); //delete nao funciona da mesma forma q antes no SPRING 2
	}
}
