import { ReceitaService } from './../../services/receita.service';
import { SharedService } from './../../services/shared.service';
import { Receita } from './../../model/receita.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResponseApi } from 'src/app/model/response-api';
import { Router } from '@angular/router';
import { ModopreparoService } from './../../services/modopreparo.service';
import { ModoPreparo } from './../../model/modopreparo.model';
import { User } from './../../model/user.model';

@Component({
  selector: 'app-modopreparo-new',
  templateUrl: './modopreparo-new.component.html',
  styleUrls: ['./modopreparo-new.component.css']
})
export class ModopreparoNewComponent implements OnInit {

  @ViewChild("form")
  form: NgForm

  usuario = new User('', '', '', '', '', '');
  receita = new Receita('', '', '', '', this.usuario);
  //modopreparo = new ModoPreparo('', false, false, false, '', '', '', this.receita);
  modopreparo = new ModoPreparo('', '', this.receita);
  shared : SharedService;
  message: {};
  classCss: {};
  idReceita : string;

  //checks
  isCobertura : boolean;
  isMassa : boolean;
  isRecheio : boolean;

  //caracteres restantes
  caracteres : number;

  constructor(
    private ReceitaService : ReceitaService,
    private route : ActivatedRoute,
    private router : Router,
    private ModopreparoService : ModopreparoService
  ) { 
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    this.calculaCaracteresRestantes(0);
    let idReceita : string = this.route.snapshot.params['idReceita'];
    if(idReceita != undefined){
      this.idReceita = idReceita;
      this.findByIdReceita(this.idReceita);
    }

    let modo : string = this.route.snapshot.params['edit'];
    if(modo == 'edit'){
      this.findByReceitaId(idReceita);
    }
  }

  findByReceitaId(id : string) {
    this.ModopreparoService.findByReceitaId(id).subscribe((responseApi : ResponseApi) => {
      this.modopreparo = responseApi.data;
      this.calculaCaracteresRestantes(this.modopreparo.descricao.length);
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  findByIdReceita(id : string) {
    this.ReceitaService.findById(id).subscribe((responseApi : ResponseApi) => {
      this.receita = responseApi.data;
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  findById(id : string) {
    this.ModopreparoService.findById(id).subscribe((responseApi : ResponseApi) => {
      this.modopreparo = responseApi.data;
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  save(){
    this.modopreparo.receita = this.receita;
    if(this.validacaoFlags()) {
      this.message = null; //tratar bug mensagem vermelha vazia
      this.ModopreparoService.createOrUpdate(this.modopreparo).subscribe((responseApi : ResponseApi) => {
        this.form.resetForm();
        this.showMessage({
          type : 'success',
          text : `Modo de Preparo cadastrado com sucesso!`
        });
        this.router.navigate(['/receita-list']); //manda pra nova receita
      }, err => {
        this.showMessage({
          type : 'error',
          text : err['error']['errors'][0]
        });
      });
    }
  }

  private showMessage(message : {type : string, text : string}) : void {
    this.message = message;
    this.buildClasses(message.type);
    setTimeout(() => {
      this.message = undefined;
    }, 3000);
  }

  private buildClasses(type : string) : void {
    this.classCss = {
      'alert' : true
    }
    this.classCss['alert-'+type] = true;
  }

  getFromGroupClass(isInvalid : boolean, isDirty): {} {
    return {
      'form-group' : true,
      'has-error' : isInvalid && isDirty,
      'has-success' : !isInvalid && isDirty
    };
  }

  //checks
  validaCobertura(evento : any) {
    this.isCobertura = evento;
    console.log(this.form);
    this.form.controls['descricaoCobertura'].setValue('');
  }
  validaMassa(evento : any) {
    this.isMassa = evento;
    this.form.controls['descricaoMassa'].setValue('');
  }
  validaRecheio(evento : any) {
    this.isRecheio = evento;
    this.form.controls['descricaoRecheio'].setValue('');
  }

  validacaoFlags() : boolean {
    let valid = true;

    if(this.isCobertura && this.isMassa && this.isRecheio) {
      valid = false;
      this.showMessage({
        type : 'error',
        text : 'Você deve ao menos preencher uma das descrições!'
      });
    }

    return valid;
  }
  //validar se todos estao checked, pelo menos 1 deve ser preenchido

  calculaCaracteresRestantes(valor : number) {
    let maximo : number = 500;
    this.caracteres = maximo - valor;
  }
}
