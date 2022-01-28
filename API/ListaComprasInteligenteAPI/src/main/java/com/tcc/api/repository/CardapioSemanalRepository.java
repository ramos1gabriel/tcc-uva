package com.tcc.api.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.tcc.api.entity.CardapioSemanal;
import com.tcc.api.enums.DiaEnum;
import com.tcc.api.enums.RefeicaoEnum;

public interface CardapioSemanalRepository extends JpaRepository<CardapioSemanal, Long> {
	
	List<CardapioSemanal> findAll();
	
	List<CardapioSemanal> findAllByDataCriacao(LocalDate data);
	
	@Query("SELECT COUNT(car.dataCriacao) FROM CardapioSemanal car WHERE car.dataCriacao = :data")
	Integer countReceitas(java.time.LocalDate data);
	
	@Query(nativeQuery = true, value ="SELECT * FROM cardapioSemanal car GROUP BY car.DATA_CRIACAO")
	List<CardapioSemanal> findAllGroupByDataCriacao();
	
	@Modifying
	@Query("DELETE FROM CardapioSemanal car WHERE car.dataCriacao = :data")
	void deleteByDataCriacao(java.time.LocalDate data);
	
	@Modifying
	@Query("DELETE FROM CardapioSemanal car WHERE car.diaSemana = :diaSemana AND "
			+ "car.tipoRefeicao = :tipoRefeicao AND car.dataCriacao = :data")
	void deleteByDiaSemanaAndTipoRefeicaoAndDataCriacao(DiaEnum diaSemana, RefeicaoEnum tipoRefeicao, 
			java.time.LocalDate data);
}