import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {

  public baseUrl = "http://localhost:3000/korisnik"
  private isLoggedIn = new Subject<boolean>();
  private username!: string;
  public userRole!: string;

  isLoggedIn$ = this.isLoggedIn.asObservable();
  loggedAdmin: boolean = false;
  loggedUser: boolean = false;

  public loginForm!: FormGroup;


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:[""],
      email: [""],
      password:[""]
    })
  }

  login(username: string, password: string){
    this.http.get<any>(this.baseUrl).subscribe((data)=>{
      for(let korisnik of data){
        const storedPasswordHash = korisnik.password; // Heširana vrednost šifre sa servera
        const enteredPasswordHash = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
        if(korisnik.username === username && enteredPasswordHash === storedPasswordHash){
          localStorage.setItem('rola', korisnik.rola)
          let role = localStorage.getItem(korisnik.rola);
          if(role != null){
            this.userRole = role
          }
          if(korisnik.rola === 'admin'){
            this.router.navigate(['admin'])
          }else{
            this.router.navigate(['user'])
          }
          alert("Uspesno ste se logovali")
          this.isLoggedIn.next(true);
          this.username = username
          return;
        }
        this.router.navigate(['login'])
        alert("Niste uneli dobru sifru ili username!!!");
      }
    })
  }

  logout(){
    localStorage.removeItem('rola');
    this.isLoggedIn.next(false);
  }

  isAuth() {
    return this.isLoggedIn
  }

  getUsername() {
    return this.username
  }
}
