import { IngredienteService } from './../../services/ingrediente.service';
import { SharedService } from './../../services/shared.service';
import { Ingrediente } from './../../model/ingrediente.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResponseApi } from 'src/app/model/response-api';

@Component({
  selector: 'app-ingrediente-new',
  templateUrl: './ingrediente-new.component.html',
  styleUrls: ['./ingrediente-new.component.css']
})
export class IngredienteNewComponent implements OnInit {

  @ViewChild("form")
  form: NgForm

  ingrediente = new Ingrediente('', '');
  shared : SharedService;
  message: {};
  classCss: {};

  constructor(
    private IngredienteService : IngredienteService,
    private route : ActivatedRoute
  ) { 

    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    let id : string = this.route.snapshot.params['id'];
    if(id != undefined){
      this.findById(id);
    }
  }

  findById(id : string) {
    this.IngredienteService.findById(id).subscribe((responseApi : ResponseApi) => {
      this.ingrediente = responseApi.data;
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
    this.IngredienteService.createOrUpdate(this.ingrediente).subscribe((responseApi : ResponseApi) => {
      this.ingrediente = new Ingrediente('', '');
      let ingredienteRet : Ingrediente = responseApi.data;
      this.form.resetForm();
      this.showMessage({
        type : 'success',
        text : `${ingredienteRet.nome} cadastrado com sucesso!`
      });
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

}
