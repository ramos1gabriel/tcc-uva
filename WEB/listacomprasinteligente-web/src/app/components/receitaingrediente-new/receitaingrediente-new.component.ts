import { Ingrediente } from './../../model/ingrediente.model';
import { Receita } from './../../model/receita.model';
import { ReceitaIngredienteService } from './../../services/receitaingrediente.service';
import { SharedService } from './../../services/shared.service';
import { ReceitaIngrediente } from './../../model/receitaingrediente.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResponseApi } from 'src/app/model/response-api';
import { IngredienteService } from './../../services/ingrediente.service';
import { ReceitaService } from './../../services/receita.service';

//https://bearnithi.com/2019/05/25/add-remove-multiple-input-fields-dynamically-template-driven-angular/

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
  recing = new ReceitaIngrediente('', '', 0, '', this.receita, this.ingrediente);

  receitaingrediente = new ReceitaIngrediente('', '', 0, '', this.receita, this.ingrediente);
  shared : SharedService;
  message: {};
  classCss: {};
  idReceita : string; //receita
  listIngrediente = [];

  public addresses: any[] = [{
    id: 1,
    qtd: '',
    street: '',
    city: '',
    country: ''
  }];

  //ARRAY DO MODEL ReceitaIngrediente
  public ingredientes: any[] = [{
    index: 1,
    ingrediente : '',
    quantidade: 0,
    unidadeMedida: ''
  }];

  constructor(
    private ReceitaIngredienteService : ReceitaIngredienteService,
    private route : ActivatedRoute,
    private IngredienteService : IngredienteService,
    private ReceitaService : ReceitaService
  ) { 

    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    //popular combo ingredientes
    this.findAllComboIngredientes();

    /*
    let id : string = this.route.snapshot.params['id'];
    if(id != undefined){
      console.log('findById');
      this.findById(id);
    }
    */

    //PASSAGEM DE PARAMETRO DA TELA RECEITA
    let idReceita : string = this.route.snapshot.params['idReceita'];
    if(idReceita != undefined){
      this.idReceita = idReceita;
      console.log('ID RECEITA = '+this.idReceita);
    }
  }

  //NOVO
  addIngrediente() {
    this.ingredientes.push({
      index: this.ingredientes.length + 1,
      ingrediente : '',
      quantidade: 0,
      unidadeMedida: ''
    });
  }

  removeIngrediente(i: number) {
    if(i>1){
      this.ingredientes.splice(i, 1);
    } else { //validacao
      this.showMessage({
        type : 'error',
        text : 'A Receita deve possuir ao menos 1 igrendiente!'
      });
    }
  }

  addAddress() {
    this.addresses.push({
      id: this.addresses.length + 1,
      address: '',
      street: '',
      city: '',
      country: ''
    });
  }

  removeAddress(i: number) {
    this.addresses.splice(i, 1);
  }

  logValue() {
    console.log(this.ingredientes);
  }
  //NOVO

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

  //COMPLEXIDADE
  persistirArray() {
    
    //percorre array de ingredientes
    this.ingredientes.forEach(function(recing){
      console.log(recing.ingrediente+','+recing.quantidade+','+recing.unidadeMedida);
      //this.findByIdReceita(this.idReceita);
      //this.findByIdIngrediente(recing.ingrediente);
      //console.log('nome receita='+this.receita.nome+'nome ingrediente='+this.ingrediente.nome);
    });

    
    /*
    this.showMessage({
      type : 'success',
      text : `Ingredientes cadastrados com sucesso!`
    });
    this.form.resetForm();
    */
  }

  //POPULA COMBO INGREDIENTES
  findAllComboIngredientes() {
    this.IngredienteService.findAllCombo().subscribe((responseApi : ResponseApi) => {
      this.listIngrediente = responseApi['data'];
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  //RECUPERA RECEITA PAI
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

  findByIdIngrediente(id : string) {
    this.IngredienteService.findById(id).subscribe((responseApi : ResponseApi) => {
      this.ingrediente = responseApi.data;
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  save(recing : ReceitaIngrediente){
    this.message = {};
    this.ReceitaIngredienteService.createOrUpdate(recing).subscribe((responseApi : ResponseApi) => {
      this.recing = new ReceitaIngrediente('', '', 0, '', this.receita, this.ingrediente);
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }
}