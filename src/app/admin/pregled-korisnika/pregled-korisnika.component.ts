import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Korisnik } from 'src/app/model/Korisnik';
import { BazaService } from 'src/app/services/baza.service';

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

  constructor(private formBuilder: FormBuilder, private baza: BazaService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      id: [''],
      username: [''],
      password: [''],
      rola: ['']
    })

    this.getAllKorisnik();
  }

  getAllKorisnik() {
    this.baza.getKorisnik().subscribe(res =>
      this.korisnikData = res)
  }

  dodajKorisnika() { }

  obrisiKorisnika(row: any) {
    this.baza.deleteKorisnik(row.id).subscribe(res => {
      alert("Uspesno ste obrisali korisnika!")
      this.getAllKorisnik();
    })
  }
}
