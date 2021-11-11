package com.tcc.api.service.impl;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tcc.api.entity.CardapioSemanal;
import com.tcc.api.enums.DiaEnum;
import com.tcc.api.enums.RefeicaoEnum;
import com.tcc.api.repository.CardapioSemanalRepository;
import com.tcc.api.service.CardapioSemanalService;

@Service
public class CardapioSemanalServiceImpl implements CardapioSemanalService {
	
	@Autowired
	private CardapioSemanalRepository cardapiosemanalRepository;

	@Override
	public List<CardapioSemanal> findAllByDataCriacao(LocalDate data) {
		return this.cardapiosemanalRepository.findAllByDataCriacao(data);
	}

	@Override
	public CardapioSemanal createOrUpdate(CardapioSemanal cardapiosemanal) {
		return this.cardapiosemanalRepository.save(cardapiosemanal);
	}
	
	@Override
	public List<CardapioSemanal> createOrUpdateAll(List<CardapioSemanal> listCardapio) {
		return this.cardapiosemanalRepository.saveAll(listCardapio);
	}

	@Override
	public CardapioSemanal findById(Long id) {
		return this.cardapiosemanalRepository.findById(id).orElse(null); //findOne nao funciona da mesma forma q antes no SPRING 2
	}

	@Override
	public void delete(Long id) {
		this.cardapiosemanalRepository.deleteById(id); //delete nao funciona da mesma forma q antes no SPRING 2
	}

	@Override
	public Page<CardapioSemanal> findAll(int page, int count) {
		Pageable pages = PageRequest.of(page, count);
		return this.cardapiosemanalRepository.findAll(pages);
	}
	
	@Override
	public Integer countReceitas(java.time.LocalDate data) {
		return this.cardapiosemanalRepository.countReceitas(data);
	}
	
//	@Override
//	public Page<CardapioSemanal> findAllGroupByDataCriacao(int page, int count) {
//		Pageable pages = PageRequest.of(page, count);
//		return this.cardapiosemanalRepository.findAllGroupByDataCriacao(pages);
//	}
	
	@Override
	public List<CardapioSemanal> findAllGroupByDataCriacao() {
		return this.cardapiosemanalRepository.findAllGroupByDataCriacao();
	}
	
	@Override
	@Transactional
	public void deleteByDataCriacao(java.time.LocalDate data) {
		this.cardapiosemanalRepository.deleteByDataCriacao(data);
	}
	
	@Override
	@Transactional
	public void deleteByDiaSemanaAndTipoRefeicaoAndDataCriacao(DiaEnum diaSemana, 
			RefeicaoEnum tipoRefeicao, java.time.LocalDate data) {
		this.cardapiosemanalRepository.deleteByDiaSemanaAndTipoRefeicaoAndDataCriacao(diaSemana, tipoRefeicao, data);
	}
}
