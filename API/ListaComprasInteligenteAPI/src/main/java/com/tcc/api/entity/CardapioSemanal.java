package com.tcc.api.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.tcc.api.enums.DiaEnum;
import com.tcc.api.enums.RefeicaoEnum;

@Entity
@Table(name="cardapiosemanal")
public class CardapioSemanal {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ID")
	private Long id;
	
	@Column(name = "DATA_CRIACAO", nullable = false)
	private LocalDate dataCriacao;
	
	@NotNull
    @Enumerated(value = EnumType.STRING)
	@Column(name = "TIPO_REFEICAO", nullable = true)
	private RefeicaoEnum tipoRefeicao;
	
	@NotNull
    @Enumerated(value = EnumType.STRING)
	@Column(name = "DIA_SEMANA", nullable = true)
	private DiaEnum diaSemana;
	
	@ManyToOne
	@JoinColumn(name = "RECEITA_ID", foreignKey = @ForeignKey(name = "FK_CARDAPIO_RECEITA"), nullable = false)
    private Receita receita;
	
	public CardapioSemanal() {}
	
	public CardapioSemanal(Long id, LocalDate dataCriacao, RefeicaoEnum tipoRefeicao, DiaEnum diaSemana, Receita receita) {
		super();
		this.id = id;
		this.dataCriacao = dataCriacao;
		this.tipoRefeicao = tipoRefeicao;
		this.diaSemana = diaSemana;
		this.receita = receita;
	}

	public RefeicaoEnum getTipoRefeicao() {
		return tipoRefeicao;
	}
	
	public void setTipoRefeicao(RefeicaoEnum tipoRefeicao) {
		this.tipoRefeicao = tipoRefeicao;
	}
	
	public DiaEnum getDiaSemana() {
		return diaSemana;
	}
	
	public void setDiaSemana(DiaEnum diaSemana) {
		this.diaSemana = diaSemana;
	}
	
	public Receita getReceita() {
		return receita;
	}
	
	public void setReceita(Receita receita) {
		this.receita = receita;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public LocalDate getDataCriacao() {
		return dataCriacao;
	}
	
	public void setDataCriacao(LocalDate dataCriacao) {
		this.dataCriacao = dataCriacao;
	}
}
