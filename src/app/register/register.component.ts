import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Korisnik } from '../model/Korisnik';
import { ApiService } from '../api/api.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  formValue!: FormGroup;
  korisnikModel: Korisnik = new Korisnik()
  korisnikData: any
  showAdd!: boolean
  constructor(private formBuilder: FormBuilder, private api: ApiService) {
    this.formValue = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      id: [''],
      username: [''],
      password: [''],
      email: [''],
    })
  }

  postKorisnik() {
    this.korisnikModel.rola = 'user'
    this.korisnikModel.username = this.formValue.value.username
    this.korisnikModel.password = this.formValue.value.password
    this.korisnikModel.email = this.formValue.value.email
    const encryptedPassword = CryptoJS.SHA256(this.korisnikModel.password).toString(CryptoJS.enc.Hex);

    this.korisnikModel.password = encryptedPassword;
    this.api.postKorisnik(this.korisnikModel).subscribe(res => {
      console.log(res);
      alert("Uspesno ste se registrovali")
      this.formValue.reset();
    },
      err => {
        alert("Doslo je do greske!!!!!")
      })
  }

}
