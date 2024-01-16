import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BazaService } from 'src/app/services/baza.service';

@Component({
  selector: 'app-specifikacija-proizvoda',
  templateUrl: './specifikacija-proizvoda.component.html',
  styleUrls: ['./specifikacija-proizvoda.component.css']
})
export class SpecifikacijaProizvodaComponent implements OnInit {

  desktopId!: number;
  desktopSpecifikacije: any; // Prilagodite ovo prema vašim podacima

  constructor(private route: ActivatedRoute, private desktopService: BazaService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.desktopId = +params['id'];
      this.getDesktopSpecifikacije();
    });
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
}
