import { Component, OnInit } from '@angular/core';
import { BazaService } from 'src/app/services/baza.service';

@Component({
  selector: 'app-procesor',
  templateUrl: './procesor.component.html',
  styleUrls: ['./procesor.component.css']
})
export class ProcesorComponent implements OnInit {

  procesori: any[] = [];
  sortedProcesori: any[] = [];
  sortBy = 'asc';

  constructor(private procesoriService: BazaService) { }

  ngOnInit(): void {
    this.getProcesori();
  }

  getProcesori() {
    this.procesoriService.getProizvodByTip('procesor').subscribe(
      (data) => {
        this.procesori = data;
        this.sortProcesori();
      },
      (error) => {
        console.error('Error fetching procesori:', error);
      }
    );
  }

  sortProcesori() {
    if (this.sortBy === 'asc') {
      this.sortedProcesori = this.procesori.slice().sort((a, b) => a.cena - b.cena);
    } else if (this.sortBy === 'desc') {
      this.sortedProcesori = this.procesori.slice().sort((a, b) => b.cena - a.cena);
    }
  }
}
