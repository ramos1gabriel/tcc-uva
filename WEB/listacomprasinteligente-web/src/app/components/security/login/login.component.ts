import { UserService } from './../../../services/user.service';
import { SharedService } from './../../../services/shared.service';
import { User } from './../../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { currentUser } from 'src/app/model/current-user.model';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User('', '', '', '', '');
  shared : SharedService;
  message : string;

  constructor(
    private userService  : UserService,
    private router : Router,
    private spinner: NgxSpinnerService
  ) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    
  }

  login() {
    this.spinner.show();
    this.message = '';
    this.userService.login(this.user).pipe(finalize(() => this.spinner.hide())).subscribe((userAuthentication : currentUser) => {
      this.shared.token = userAuthentication.token;
      this.shared.user = userAuthentication.user;
      //this.shared.user.profile = this.shared.user.profile.substring(5);
      this.shared.showTemplate.emit(true);
      this.router.navigate(['/']);

      sessionStorage.setItem("currentUser", userAuthentication.toString()); //TESTE F5
    }, err => {
      this.shared.token = null;
      this.shared.user = null;
      this.shared.showTemplate.emit(false);
      this.message = 'Erro';
    });
  }

  cancelLogin() {
    this.message = '';
    this.user = new User('', '', '', '', '');
    window.location.href = '/login';
    window.location.reload();
  }

  getFromGroupClass(isInvalid : boolean, isDirty): {} {
    return {
      'form-group' : true,
      'has-error' : isInvalid && isDirty,
      'has-success' : !isInvalid && isDirty
    };
  }
}
