import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BazaService } from 'src/app/services/baza.service';

@Component({
  selector: 'app-desktop-specifikacija',
  templateUrl: './desktop-specifikacija.component.html',
  styleUrls: ['./desktop-specifikacija.component.css']
})
export class DesktopSpecifikacijaComponent implements OnInit {

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
    this.desktopService.getDesktopById(this.desktopId).subscribe(
      (data) => {
        this.desktopSpecifikacije = data;
      },
      (error) => {
        console.error('Error fetching desktop specifikacije:', error);
      }
    );
  }
}
