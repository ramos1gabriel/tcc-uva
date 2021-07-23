import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public shared : SharedService;

  constructor() {
    this.shared = SharedService.getInstance();
    this.shared.user = new User('', '', '', '', '', '1');
  }

  ngOnInit() {
  }

  signOut() : void {
    this.shared.token = null;
    this.shared.user = null;
    window.location.href = '/login';
    window.location.reload();
  }
}
