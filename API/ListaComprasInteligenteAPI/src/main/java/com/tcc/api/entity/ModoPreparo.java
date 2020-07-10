package com.tcc.api.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="modopreparo")
public class ModoPreparo {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ID")
	private Long id;
	
	@Column(name = "FLCOB", nullable = false)
    private Boolean flagCobertura;
	
	@Column(name = "FLMAS", nullable = false)
    private Boolean flagMassa;
	
	@Column(name = "FLREC", nullable = false)
    private Boolean flagRecheio;
	
	/*@NotNull
    @Enumerated(value = EnumType.STRING)
    @Column(name = "TIPO", length = 1, nullable = false)
    private TipoEnum tipo;*/
    
	 //definir o tamanho melhor da descricoes, avaliar impacto..
    @Column(name = "DSCOB", length = 255)
    private String descricaoCobertura;
    
    @Column(name = "DSMAS", length = 255)
    private String descricaoMassa;
    
    @Column(name = "DSREC", length = 255)
    private String descricaoRecheio;
    
    @ManyToOne
    @JoinColumn(name = "RECEITA_ID", foreignKey = @ForeignKey(name = "FK_MODOPREPARO_RECEITA"), nullable = false)
    private Receita receita;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Boolean getFlagCobertura() {
		return flagCobertura;
	}

	public void setFlagCobertura(Boolean flagCobertura) {
		this.flagCobertura = flagCobertura;
	}

	public Boolean getFlagMassa() {
		return flagMassa;
	}

	public void setFlagMassa(Boolean flagMassa) {
		this.flagMassa = flagMassa;
	}

	public Boolean getFlagRecheio() {
		return flagRecheio;
	}

	public void setFlagRecheio(Boolean flagRecheio) {
		this.flagRecheio = flagRecheio;
	}

	public String getDescricaoCobertura() {
		return descricaoCobertura;
	}

	public void setDescricaoCobertura(String descricaoCobertura) {
		this.descricaoCobertura = descricaoCobertura;
	}

	public String getDescricaoMassa() {
		return descricaoMassa;
	}

	public void setDescricaoMassa(String descricaoMassa) {
		this.descricaoMassa = descricaoMassa;
	}

	public String getDescricaoRecheio() {
		return descricaoRecheio;
	}

	public void setDescricaoRecheio(String descricaoRecheio) {
		this.descricaoRecheio = descricaoRecheio;
	}

	public Receita getReceita() {
		return receita;
	}

	public void setReceita(Receita receita) {
		this.receita = receita;
	}
}

