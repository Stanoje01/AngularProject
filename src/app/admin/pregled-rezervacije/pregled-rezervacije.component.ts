import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Rezervacija } from 'src/app/model/Rezervacija';
import { BazaService } from 'src/app/services/baza.service';

@Component({
  selector: 'app-pregled-rezervacije',
  templateUrl: './pregled-rezervacije.component.html',
  styleUrls: ['./pregled-rezervacije.component.css']
})
export class PregledRezervacijeComponent implements OnInit {



  formValue!: FormGroup;
  rezervacijaModel: Rezervacija = new Rezervacija();

  rezervacijaData!: any;


  constructor(private formBuilder: FormBuilder, private baza: BazaService) { }


  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      id: [''],
      naziv: ['', Validators.required],
      cena: ['', Validators.required],
      ime: ['', Validators.required],
      prezime: ['', Validators.required],
      adresa: ['', Validators.required]
    })

    this.getAllRezervacija();
  }

  getAllRezervacija() {
    this.baza.getRezervacija().subscribe(res => {
      this.rezervacijaData = res
    })
  }

  obrisiRezervacija(row: any) {
    this.baza.deleteRezervacija(row.id).subscribe(res => {
      alert("Uspesno ste obrisali rezervacijaa!")
      this.getAllRezervacija();
    })
  }

  posaljiRezervacija(row: any) {
    this.baza.deleteRezervacija(row.id).subscribe(res => {
      alert("Uspesno ste poslali rezervaciju! Ona se više neće videti u tabeli rezevracije.")
      this.getAllRezervacija();
    })
  }




}
