import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = '';
  password = '';

  constructor( private servis: LoginService) { }

  login(){
    this.servis.login(this.username, this.password);
    console.log(localStorage)
  }

  
}
