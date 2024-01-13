import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName, Validators } from '@angular/forms';
import { Korisnik } from 'src/app/model/Korisnik';
import { BazaService } from 'src/app/services/baza.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-pregled-korisnika',
  templateUrl: './pregled-korisnika.component.html',
  styleUrls: ['./pregled-korisnika.component.css']
})
export class PregledKorisnikaComponent implements OnInit {



  formValue!: FormGroup;
  korisnikModel: Korisnik = new Korisnik();

  korisnikData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(private formBuilder: FormBuilder, private baza: BazaService) {
    this.formValue = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rola: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
      rola: ['']
    })

    this.getAllKorisnik();
  }

  getAllKorisnik() {
    this.baza.getKorisnik().subscribe(res => {
      this.korisnikData = res
    })
  }

  dodajKorisnika() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  obrisiKorisnika(row: any) {
    this.baza.deleteKorisnik(row.id).subscribe(res => {
      alert("Uspesno ste obrisali korisnika!")
      this.getAllKorisnik();
    })
  }

  postKorisnikDetails() {

    this.korisnikModel.username = this.formValue.value.username
    this.korisnikModel.password = this.formValue.value.password
    this.korisnikModel.rola = this.formValue.value.rola
    const encryptedPassword = CryptoJS.SHA256(this.korisnikModel.password).toString(CryptoJS.enc.Hex);
    this.korisnikModel.password = encryptedPassword

    this.baza.postKorisnik(this.korisnikModel).subscribe(res => {
      console.log(res);
      alert("Uspesno dodali korisnika")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.formValue.reset();
      this.getAllKorisnik();
    },
      err => {
        alert('Doslo je do neke greske')
      }
    )
  }

  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.korisnikModel.id = row.id;
    this.formValue.controls['username'].setValue(row.username);
    this.formValue.controls['password'].setValue(row.password);
    this.formValue.controls['rola'].setValue(row.rola);

  }
  updateKorisnikDetails() {
    this.korisnikModel.username = this.formValue.value.username;
    this.korisnikModel.password = this.formValue.value.password;
    this.korisnikModel.rola = this.formValue.value.rola;

    this.baza.updateKorisnik(this.korisnikModel, this.korisnikModel.id).subscribe(res => {
      alert('Izmena je upravo izvrsena!');
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllKorisnik();
    })
  }
}
