import { Component, OnInit } from '@angular/core';
import { BazaService } from 'src/app/services/baza.service';

@Component({
  selector: 'app-desktop-racunar',
  templateUrl: './desktop-racunar.component.html',
  styleUrls: ['./desktop-racunar.component.css']
})
export class DesktopRacunarComponent implements OnInit {

  desktop: any[] = [];
  sortedDesktop: any[] = [];
  sortBy = 'asc';

  constructor(private desktopService: BazaService) { }

  ngOnInit(): void {
    this.getDesktop();
  }

  getDesktop() {
    this.desktopService.getProizvodByTip('desktop').subscribe(
      (data) => {
        this.desktop = data;
        this.sortDesktop();
      },
      (error) => {
        console.error('Error fetching desktop:', error);
      }
    );
  }

  sortDesktop() {
    if (this.sortBy === 'asc') {
      this.sortedDesktop = this.desktop.slice().sort((a, b) => a.cena - b.cena);
    } else if (this.sortBy === 'desc') {
      this.sortedDesktop = this.desktop.slice().sort((a, b) => b.cena - a.cena);
    }
  }
}
