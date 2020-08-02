package com.tcc.api.entity;

import java.util.ArrayList;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.List;
import java.util.TimeZone;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;

//REGRAS SO PODE CRIAR UMA CARDAPIO POR DIA
//so o almoco e janta sao obrigatorios o resto e opicional

@Entity
@Table(name="cardapiosemanal")
public class CardapioSemanal {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ID")
	private Long id;

	//@Temporal(TemporalType.DATE)
	@Column(name = "DATA_CRIACAO", nullable = false)
	private String dataCriacao;
	
	//SEGUNDA-FEIRA
	@Column(name = "SEGUNDA_CAFE", nullable = true)
	private Long segundaCafe;
	
	@Column(name = "SEGUNDA_ALMOCO", nullable = false)
	private Long segundaAlmoco;
	
	@Column(name = "SEGUNDA_LANCHE",  nullable = true)
	private Long segundaLanche;
	
	@Column(name = "SEGUNDA_JANTAR", nullable = false)
	private Long segundaJantar;
	
	//TERCA-FEIRA
	@Column(name = "TERCA_CAFE", nullable = true)
	private Long tercaCafe;
	
    @Column(name = "TERCA_ALMOCO", nullable = false)
	private Long tercaAlmoco;
	
    @Column(name = "TERCA_LANCHE", nullable = true)
	private Long tercaLanche;
	
    @Column(name = "TERCA_JANTAR", nullable = false)
	private Long tercaJantar;
	
	//QUARTA-FEIRA
    @Column(name = "QUARTA_CAFE", nullable = true)
	private Long quartaCafe;
	
    @Column(name = "QUARTA_ALMOCO", nullable = false)
	private Long quartaAlmoco;
	
    @Column(name = "QUARTA_LANCHE", nullable = true)
	private Long quartaLanche;
	
    @Column(name = "QUARTA_JANTAR", nullable = false)
	private Long quartaJantar;
	
	//QUINTA-FEIRA
    @Column(name = "QUINTA_CAFE", nullable = true)
	private Long quintaCafe;
	
    @Column(name = "QUINTA_ALMOCO", nullable = false)
	private Long quintaAlmoco;
	
    @Column(name = "QUINTA_LANCHE", nullable = true)
	private Long quintaLanche;
	
    @Column(name = "QUINTA_JANTAR", nullable = false)
	private Long quintaJantar;
	
	//SEXTA-FEIRA
    @Column(name = "SEXTA_CAFE", nullable = true)
	private Long sextaCafe;
	
    @Column(name = "SEXTA_ALMOCO", nullable = false)
	private Long sextaAlmoco;
	
    @Column(name = "SEXTA_LANCHE", nullable = true)
	private Long sextaLanche;
	
    @Column(name = "SEXTA_JANTAR", nullable = false)
	private Long sextaJantar;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDataCriacao() {
		return dataCriacao;
	}

	public void setDataCriacao(String dataCriacao) {
		this.dataCriacao = dataCriacao;
	}

	public Long getSegundaCafe() {
		return segundaCafe;
	}

	public void setSegundaCafe(Long segundaCafe) {
		this.segundaCafe = segundaCafe;
	}

	public Long getSegundaAlmoco() {
		return segundaAlmoco;
	}

	public void setSegundaAlmoco(Long segundaAlmoco) {
		this.segundaAlmoco = segundaAlmoco;
	}

	public Long getSegundaLanche() {
		return segundaLanche;
	}

	public void setSegundaLanche(Long segundaLanche) {
		this.segundaLanche = segundaLanche;
	}

	public Long getSegundaJantar() {
		return segundaJantar;
	}

	public void setSegundaJantar(Long segundaJantar) {
		this.segundaJantar = segundaJantar;
	}

	public Long getTercaCafe() {
		return tercaCafe;
	}

	public void setTercaCafe(Long tercaCafe) {
		this.tercaCafe = tercaCafe;
	}

	public Long getTercaAlmoco() {
		return tercaAlmoco;
	}

	public void setTercaAlmoco(Long tercaAlmoco) {
		this.tercaAlmoco = tercaAlmoco;
	}

	public Long getTercaLanche() {
		return tercaLanche;
	}

	public void setTercaLanche(Long tercaLanche) {
		this.tercaLanche = tercaLanche;
	}

	public Long getTercaJantar() {
		return tercaJantar;
	}

	public void setTercaJantar(Long tercaJantar) {
		this.tercaJantar = tercaJantar;
	}

	public Long getQuartaCafe() {
		return quartaCafe;
	}

	public void setQuartaCafe(Long quartaCafe) {
		this.quartaCafe = quartaCafe;
	}

	public Long getQuartaAlmoco() {
		return quartaAlmoco;
	}

	public void setQuartaAlmoco(Long quartaAlmoco) {
		this.quartaAlmoco = quartaAlmoco;
	}

	public Long getQuartaLanche() {
		return quartaLanche;
	}

	public void setQuartaLanche(Long quartaLanche) {
		this.quartaLanche = quartaLanche;
	}

	public Long getQuartaJantar() {
		return quartaJantar;
	}

	public void setQuartaJantar(Long quartaJantar) {
		this.quartaJantar = quartaJantar;
	}

	public Long getQuintaCafe() {
		return quintaCafe;
	}

	public void setQuintaCafe(Long quintaCafe) {
		this.quintaCafe = quintaCafe;
	}

	public Long getQuintaAlmoco() {
		return quintaAlmoco;
	}

	public void setQuintaAlmoco(Long quintaAlmoco) {
		this.quintaAlmoco = quintaAlmoco;
	}

	public Long getQuintaLanche() {
		return quintaLanche;
	}

	public void setQuintaLanche(Long quintaLanche) {
		this.quintaLanche = quintaLanche;
	}

	public Long getQuintaJantar() {
		return quintaJantar;
	}

	public void setQuintaJantar(Long quintaJantar) {
		this.quintaJantar = quintaJantar;
	}

	public Long getSextaCafe() {
		return sextaCafe;
	}

	public void setSextaCafe(Long sextaCafe) {
		this.sextaCafe = sextaCafe;
	}

	public Long getSextaAlmoco() {
		return sextaAlmoco;
	}

	public void setSextaAlmoco(Long sextaAlmoco) {
		this.sextaAlmoco = sextaAlmoco;
	}

	public Long getSextaLanche() {
		return sextaLanche;
	}

	public void setSextaLanche(Long sextaLanche) {
		this.sextaLanche = sextaLanche;
	}

	public Long getSextaJantar() {
		return sextaJantar;
	}

	public void setSextaJantar(Long sextaJantar) {
		this.sextaJantar = sextaJantar;
	}
	
	public String getDataFormatada() {
		String datas[] = getDataCriacao().split("-");
	    return  datas[2] + "/" + datas[1] + "/" + datas[0];
	}
	
	//teste
	@JsonIgnore
	public List<Long> getRefeicoes() {
		List<Long> refeicoes = new ArrayList<Long>();
		
		//cafe
		if(getSegundaCafe() != null) {
			refeicoes.add(getSegundaCafe());
		} else {
			refeicoes.add(Long.valueOf(0));
		}
		if(getTercaCafe() != null) {
			refeicoes.add(getTercaCafe());
		} else {
			refeicoes.add(Long.valueOf(0));
		}
		if(getQuartaCafe() != null) {
			refeicoes.add(getQuartaCafe());
		} else {
			refeicoes.add(Long.valueOf(0));
		}
		if(getQuintaCafe() != null) {
			refeicoes.add(getQuintaCafe());
		} else {
			refeicoes.add(Long.valueOf(0));
		}
		if(getSextaCafe() != null) {
			refeicoes.add(getSextaCafe());
		} else {
			refeicoes.add(Long.valueOf(0));
		}
		
		//almoco
		refeicoes.add(getSegundaAlmoco());
		refeicoes.add(getTercaAlmoco());
		refeicoes.add(getQuartaAlmoco());
		refeicoes.add(getQuintaAlmoco());
		refeicoes.add(getSextaAlmoco());
		
		//lanche
		if(getSegundaLanche() != null) {
			refeicoes.add(getSegundaLanche());
		} else {
			refeicoes.add(Long.valueOf(0));
		}
		if(getTercaLanche() != null) {
			refeicoes.add(getTercaLanche());
		} else {
			refeicoes.add(Long.valueOf(0));
		}
		if(getQuartaLanche() != null) {
			refeicoes.add(getQuartaLanche());
		} else {
			refeicoes.add(Long.valueOf(0));
		}
		if(getQuintaLanche() != null) {
			refeicoes.add(getQuintaLanche());
		} else {
			refeicoes.add(Long.valueOf(0));
		}
		if(getSextaLanche() != null) {
			refeicoes.add(getSextaLanche());
		} else {
			refeicoes.add(Long.valueOf(0));
		}
		
		//jantar
		refeicoes.add(getSegundaJantar());
		refeicoes.add(getTercaJantar());
		refeicoes.add(getQuartaJantar());
		refeicoes.add(getQuintaJantar());
		refeicoes.add(getSextaJantar());
		
		return refeicoes;
	}
}
