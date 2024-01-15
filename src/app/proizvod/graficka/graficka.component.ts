import { Component, OnInit } from '@angular/core';
import { BazaService } from 'src/app/services/baza.service';

@Component({
  selector: 'app-graficka',
  templateUrl: './graficka.component.html',
  styleUrls: ['./graficka.component.css']
})
export class GrafickaComponent implements OnInit {

  graficka: any[] = [];
  sortedGraficka: any[] = [];
  sortBy = 'asc';

  constructor(private grafickaService: BazaService) { }

  ngOnInit(): void {
    this.getGraficka();
  }

  getGraficka() {
    this.grafickaService.getProizvodByTip('graficka').subscribe(
      (data) => {
        this.graficka = data;
        this.sortGraficka();
      },
      (error) => {
        console.error('Error fetching graficka:', error);
      }
    );
  }

  sortGraficka() {
    if (this.sortBy === 'asc') {
      this.sortedGraficka = this.graficka.slice().sort((a, b) => a.cena - b.cena);
    } else if (this.sortBy === 'desc') {
      this.sortedGraficka = this.graficka.slice().sort((a, b) => b.cena - a.cena);
    }
  }

}
