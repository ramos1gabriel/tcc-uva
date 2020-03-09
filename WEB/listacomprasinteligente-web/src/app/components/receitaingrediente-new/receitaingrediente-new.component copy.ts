import { Ingrediente } from './../../model/ingrediente.model';
import { Receita } from './../../model/receita.model';
import { ReceitaIngredienteService } from './../../services/receitaingrediente.service';
import { SharedService } from './../../services/shared.service';
import { ReceitaIngrediente } from './../../model/receitaingrediente.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResponseApi } from 'src/app/model/response-api';
import { IngredienteService } from './../../services/ingrediente.service';

@Component({
  selector: 'app-receitaingrediente-new',
  templateUrl: './receitaingrediente-new.component.html',
  styleUrls: ['./receitaingrediente-new.component.css']
})
export class ReceitaingredienteNewComponent implements OnInit {

  @ViewChild("form")
  form: NgForm

  //novo
  receita = new Receita('', '', '', '');
  ingrediente = new Ingrediente('', '');

  recIng = new ReceitaIngrediente('', '', 0, '', this.receita, this.ingrediente);
  shared : SharedService;
  message: {};
  classCss: {};
  idReceita : string; //receita
  listIngrediente = [];

  constructor(
    private ReceitaIngredienteService : ReceitaIngredienteService,
    private route : ActivatedRoute,
    private ingredienteService : IngredienteService
  ) { 

    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    //popular combo ingredientes
    this.findAllComboIngredientes();

    let id : string = this.route.snapshot.params['id'];
    if(id != undefined){
      console.log('findById');
      this.findById(id);
    }

    //PASSAGEM DE PARAMETRO DA TELA RECEITA
    let idReceita : string = this.route.snapshot.params['idReceita'];
    if(idReceita != undefined){
      console.log('RECEITA NOVA!');
      this.idReceita = idReceita;
    }
  }

  findById(id : string) {
    this.ReceitaIngredienteService.findById(id).subscribe((responseApi : ResponseApi) => {
      this.recIng = responseApi.data;
      //this.user.senha = '';
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  save(){
    this.message = {};
    this.ReceitaIngredienteService.createOrUpdate(this.recIng).subscribe((responseApi : ResponseApi) => {
      this.recIng = new ReceitaIngrediente('', '', 0, '', this.receita, this.ingrediente);
      let recIngRet : ReceitaIngrediente = responseApi.data;
      this.form.resetForm();
      this.showMessage({
        type : 'success',
        text : `Ingredientes cadastrado com sucesso!`
      });
      //window.location.href = '/login';
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  private showMessage(message : {type : string, text : string}) : void {
    this.message = message;
    this.buildClasses(message.type);
    setTimeout(() => { //LIMPA MENSAGEM
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

  findAllComboIngredientes() {
    this.ingredienteService.findAllCombo().subscribe((responseApi : ResponseApi) => {
      this.listIngrediente = responseApi['data'];
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }
}