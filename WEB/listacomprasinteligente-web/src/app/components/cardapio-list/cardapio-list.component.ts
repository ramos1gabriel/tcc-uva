import { DialogService } from './../../services/dialog.service';
import { CardapioService } from './../../services/cardapio.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { ResponseApi } from 'src/app/model/response-api';
import swal from 'sweetalert';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-cardapio-list',
  templateUrl: './cardapio-list.component.html',
  styleUrls: ['./cardapio-list.component.css']
})
export class CardapioListComponent implements OnInit {

  page : number = 0;
  count : number = 5;
  pages : Array<number>;
  shared : SharedService;
  message : {};
  classCss : {};
  listCardapio = [];
  listProgress = [];
  
  constructor(
    private dialogService : DialogService,
    private CardapioService : CardapioService,
    private router : Router,
    private spinner: NgxSpinnerService
  ) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    this.findAll(this.page, this.count);
  }

  findAll(page : number, count : number) {
    this.CardapioService.findAll(page, count).pipe(
      finalize(() => 
        this.preencheProgressBar()
      )
    ).subscribe((responseApi : ResponseApi) => {
      this.listCardapio = responseApi['data']['content'];
      this.pages = new Array(responseApi['data']['totalPages']);
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  edit(id : string) {
    this.router.navigate(['/cardapio-new', id]);
  }

  delete(id : string) {
    swal({
      title: "Atenção",
      text: `Tem certeza que deseja excluir esse registro?`,
      icon: "warning",
      buttons: ['Cancelar', true],
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        this.message = {};
        this.CardapioService.delete(id).subscribe((responseApi : ResponseApi) => {
          swal(`Registro excluido com sucesso!`, {
            icon: "success",
          });
          this.listCardapio = [];
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

  //RUDIMENTAR
  preencheProgressBar() {
    for (let i = 0; i < this.listCardapio.length; i++) {
      let progress : number = 0;
      if(this.listCardapio[i].segundaCafe != null) {
        progress += 5;
      }
      if(this.listCardapio[i].segundaAlmoco != null) {
        progress += 5;
      }
      if(this.listCardapio[i].segundaLanche != null) {
        progress += 5;
      }
      if(this.listCardapio[i].segundaJantar != null) {
        progress += 5;
      }

      if(this.listCardapio[i].tercaCafe != null) {
        progress += 5;
      }
      if(this.listCardapio[i].tercaAlmoco != null) {
        progress += 5;
      }
      if(this.listCardapio[i].tercaLanche != null) {
        progress += 5;
      }
      if(this.listCardapio[i].tercaJantar != null) {
        progress += 5;
      }

      if(this.listCardapio[i].quartaCafe != null) {
        progress += 5;
      }
      if(this.listCardapio[i].quartaAlmoco != null) {
        progress += 5;
      }
      if(this.listCardapio[i].quartaLanche != null) {
        progress += 5;
      }
      if(this.listCardapio[i].quartaJantar != null) {
        progress += 5;
      }

      if(this.listCardapio[i].quintaCafe != null) {
        progress += 5;
      }
      if(this.listCardapio[i].quintaAlmoco != null) {
        progress += 5;
      }
      if(this.listCardapio[i].quintaLanche != null) {
        progress += 5;
      }
      if(this.listCardapio[i].quintaJantar != null) {
        progress += 5;
      }

      if(this.listCardapio[i].sextaCafe != null) {
        progress += 5;
      }
      if(this.listCardapio[i].sextaAlmoco != null) {
        progress += 5;
      }
      if(this.listCardapio[i].sextaLanche != null) {
        progress += 5;
      }
      if(this.listCardapio[i].sextaJantar != null) {
        progress += 5;
      }
      this.listProgress[i] = progress;
    }
  }

  exportListaCompraToPdf(id : string) {
    this.spinner.show();
    this.CardapioService.generateDocumentReport(id).pipe(finalize(() => this.spinner.hide())).subscribe(response => {
      //console.log(response);
      let url = window.URL.createObjectURL(response.data);
      //window.open(url,'_blank');
      let a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.setAttribute('target', 'blank');
      a.href = url;
      a.download = response.filename;
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    }, error => {
      console.log(error);
    });
  }
}
