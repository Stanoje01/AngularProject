import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Proizvod } from 'src/app/model/Proizvod';
import { Rezervacija } from 'src/app/model/Rezervacija';
import { BazaService } from 'src/app/services/baza.service';

@Component({
  selector: 'app-specifikacija-proizvoda',
  templateUrl: './specifikacija-proizvoda.component.html',
  styleUrls: ['./specifikacija-proizvoda.component.css']
})
export class SpecifikacijaProizvodaComponent implements OnInit {

  formValue!: FormGroup;
  proizvodModel: Proizvod = new Proizvod();

  rezervacijaModel: Rezervacija = new Rezervacija();
  proizvodData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;

  desktopId!: number;
  desktopSpecifikacije: any; // Prilagodite ovo prema vašim podacima
  showReservationForm: boolean = false; // Dodajte ovu liniju

  // ... ostatak koda ...


  constructor(private route: ActivatedRoute, private desktopService: BazaService, private formBuilder: FormBuilder) {
    this.formValue = this.formBuilder.group({
      naziv: ['', Validators.required],
      cena: ['', Validators.required],
      ime: ['', Validators.required],
      prezime: ['', Validators.required],
      adresa: ['', Validators.required]

    })
  }

  toggleReservationForm() {
    this.showReservationForm = !this.showReservationForm;
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.desktopId = +params['id'];
      this.getDesktopSpecifikacije();
    });
    // this.formValue = this.formBuilder.group({
    //   id: [''],
    //   naziv: ['', Validators.required],
    //   cena: ['', Validators.required]
    // })
  }
  getDesktopSpecifikacije() {
    this.desktopService.getProizvodById(this.desktopId).subscribe(
      (data) => {
        this.desktopSpecifikacije = data;
      },
      (error) => {
        console.error('Error fetching desktop specifikacije:', error);
      }
    );
  }

  onEdit(row: any) {
    this.showAdd = true;
    this.showUpdate = false;
    this.proizvodModel.id = row.id;
    this.formValue.controls['naziv'].setValue(row.naziv);
    this.formValue.controls['cena'].setValue(row.cena);
  }

  postProizvodDetails() {

    this.rezervacijaModel.cena = this.formValue.value.cena
    this.rezervacijaModel.naziv = this.formValue.value.naziv
    this.rezervacijaModel.ime = this.formValue.value.ime
    this.rezervacijaModel.prezime = this.formValue.value.prezime
    this.rezervacijaModel.adresa = this.formValue.value.adresa
   

    this.desktopService.postRezervacija(this.rezervacijaModel).subscribe(res => {
      console.log(res);
      alert("Uspesno dodali rezervacijada")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.formValue.reset();
    },
      err => {
        alert('Doslo je do neke greske')
      }
    )
  }



  postKorisnikDetails() {

    this.rezervacijaModel.naziv = this.formValue.value.naziv
    this.rezervacijaModel.cena = this.formValue.value.cena
    this.rezervacijaModel.ime = this.formValue.value.ime
    this.rezervacijaModel.prezime = this.formValue.value.prezime
    this.rezervacijaModel.adresa = this.formValue.value.adresa

    this.desktopService.postRezervacija(this.rezervacijaModel).subscribe(res => {
      console.log(res);
      alert("Uspesno dodali rezervacijaa")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.formValue.reset();
    },
      err => {
        alert('Doslo je do neke greske')
      }
    )
  }
}
