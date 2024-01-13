import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BazaService } from '../services/baza.service';

@Component({
  selector: 'app-pocetnastrana',
  templateUrl: './pocetnastrana.component.html',
  styleUrls: ['./pocetnastrana.component.css']
})
export class PocetnastranaComponent implements OnInit {

  products!: any[]; // Ovde ćemo čuvati podatke iz JSON-a

  constructor(private http: HttpClient, private baza: BazaService) {}

  ngOnInit() {
    this.baza.getProizvod().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
