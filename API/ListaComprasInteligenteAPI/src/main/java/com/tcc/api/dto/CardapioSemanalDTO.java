package com.tcc.api.dto;

import java.time.LocalDate;

import com.tcc.api.enums.DiaEnum;
import com.tcc.api.enums.RefeicaoEnum;

//@Entity
//@Table(name="cardapiosemanal")
public class CardapioSemanalDTO {
	
	//@Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
	//@Column(name="ID")
	private Long id;

	//@Temporal(TemporalType.DATE)
	//@Column(name = "DATA_CRIACAO", nullable = false)
	private LocalDate dataCriacao;
	
	//@NotNull
    //@Enumerated(value = EnumType.STRING)
	//@Column(name = "TIPO_REFEICAO", nullable = true)
	private RefeicaoEnum tipoRefeicao;
	
	private DiaEnum diaSemana;
	
	private Integer qtdRefeicoes;
	
	public CardapioSemanalDTO() {}
	
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
	
	public RefeicaoEnum getTipoRefeicao() {
		return tipoRefeicao;
	}

	public void setTipoRefeicao(RefeicaoEnum tipoRefeicao) {
		this.tipoRefeicao = tipoRefeicao;
	}

	public Integer getQtdRefeicoes() {
		return qtdRefeicoes;
	}
	
	public void setQtdRefeicoes(Integer qtdRefeicoes) {
		this.qtdRefeicoes = qtdRefeicoes;
	}
	
	public DiaEnum getDiaSemana() {
		return diaSemana;
	}
	
	public void setDiaSemana(DiaEnum diaSemana) {
		this.diaSemana = diaSemana;
	}
	
	public String getDiaSemanaFormatado() {
		switch(getDiaSemana()) {
			case segunda:
				return "Segunda";
			case terca:
				return "Terca";
			case quarta:
				return "Quarta";
			case quinta:
				return "Quinta";
			case sexta:
				return "Sexta";
			default:
				return "";
		}
	}

	public String getTipoRefeicaoFormatado() {
		switch(getTipoRefeicao()) {
			case cafe:
				return "Café";
			case almoco:
				return "Almoço";
			case lanche:
				return "Lanche";
			case jantar:
				return "Jantar";
			default:
				return "";
		}
	}
}
