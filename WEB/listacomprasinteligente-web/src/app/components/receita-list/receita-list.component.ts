import { DialogService } from './../../services/dialog.service';
import { ReceitaService } from './../../services/receita.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { ResponseApi } from 'src/app/model/response-api';
import swal from 'sweetalert';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-receita-list',
  templateUrl: './receita-list.component.html',
  styleUrls: ['./receita-list.component.css']
})
export class ReceitaListComponent implements OnInit {
  page : number = 0;
  count : number = 5;
  pages : Array<number>;
  shared : SharedService;
  message : {};
  classCss : {};
  listReceita = [];
  
  constructor(
    private ReceitaService : ReceitaService,
    private router : Router,
    private spinner: NgxSpinnerService
  ) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    this.spinner.show();
    this.findAll(this.page, this.count);
  }

  findAll(page : number, count : number) {
    this.ReceitaService.findAllPesquisa(page, count).pipe(
      finalize(() => this.spinner.hide())
    ).subscribe((responseApi : ResponseApi) => {
      this.listReceita = responseApi['data']['content'];
      this.pages = new Array(responseApi['data']['totalPages']);
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  edit(id : string) {
    this.router.navigate(['/receita-new', id, 'edit']);
  }

  delete(id : string) {
    swal({
      title: "Atenção",
      text: `Tem certeza que deseja excluir esse registro?`,
      icon: "warning",
      buttons: ['Cancelar', true],
      dangerMode: true
    })
    .then((willDelete) => {
      if (willDelete) {
        this.message = {};
        this.ReceitaService.deleteAll(id).subscribe((responseApi : ResponseApi) => {
          swal(`Registro excluido com sucesso!`, {
            icon: "success",
          });
          this.listReceita = [];
          this.findAll(this.page, this.count);
        }, err => {
          this.showMessage({
            type : 'error',
            text : err['error']['errors'][0]
          });
        });
      }
    });
  }

  setNextPage(event : any) {
    event.preventDefault();
    if(this.page+1 < this.pages.length) {
      this.page = this.page + 1;
      this.findAll(this.page, this.count);
    }
  }

  setPreviousPage(event : any) {
    event.preventDefault();
    if(this.page > 0) {
      this.page = this.page - 1;
      this.findAll(this.page, this.count);
    }
  }

  setPage(i, event : any) {
    event.preventDefault();
    if(this.page > 0) {
      this.page = i;
      this.findAll(this.page, this.count);
    }
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
}

/*
RECEITA:
Brigadeiro de panela
Rapído e delecioso!

RECEITA INGREDIENTE:
1 lata de leite condensado
4 colheres de Nescau
2 colheres de mateiga

MODO PREPARO:
Junte esses ingredientes numa panela. Adicione o achocolatado e a mateiga, e mexe até criar consistência, ou seja, até começar a engrossar.
Despeje tudo numa vasilha de vidro e leve a geladeira. Espere aproximadamente uma hora e meia, e está pronto, é só se deliciar!
*/