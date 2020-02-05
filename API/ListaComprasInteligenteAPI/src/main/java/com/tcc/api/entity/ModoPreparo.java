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
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="modopreparo")
public class ModoPreparo {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ID")
	private Long id;
	
	@NotBlank(message = "numero da ordem obrigatorio!")
	@Column(name = "ORDEM", nullable = false)
    private Long ordem;
    
	@NotBlank(message = "Descricao obrigatorio!")
    @Column(name = "DESCRICAO", length = 255, nullable = false)
    private String descricao;
    
    @ManyToOne
    @JoinColumn(name = "RECEITA_ID", foreignKey = @ForeignKey(name = "FK_MODOPREPARO_RECEITA"), nullable = false)
    private Receita receita;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getOrdem() {
		return ordem;
	}

	public void setOrdem(Long ordem) {
		this.ordem = ordem;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Receita getReceita() {
		return receita;
	}

	public void setReceita(Receita receita) {
		this.receita = receita;
	}
}
