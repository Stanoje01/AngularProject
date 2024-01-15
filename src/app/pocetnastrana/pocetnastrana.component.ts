import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { BazaService } from '../services/baza.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-pocetnastrana',
  templateUrl: './pocetnastrana.component.html',
  styleUrls: ['./pocetnastrana.component.css']
})
export class PocetnastranaComponent implements OnInit {

  products!: any[]; // Ovde ćemo čuvati podatke iz JSON-a

  images: string[] = ['assets/slika1.jpg', 'assets/slika2.jpg', 'assets/slika3.png', 'assets/slika4.jpg'];
  counter: number = 1;

  product: any = {
    name: 'Special Product',
    originalPrice: 100,
    discountedPrice: 80,
    discountPercentage: 20,
    countdown: 86400 // in seconds
  };

  constructor(private http: HttpClient, private baza: BazaService, private elRef: ElementRef, private router: Router) { }

  ngOnInit() {
    this.baza.getProizvod().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

    setInterval(() => {
      this.slide();
    }, 3000); // Change slide every 3 seconds
  }


  goToProductDetail(productId: number) {
    this.router.navigate(['/product', productId]);
  }

  slide() {
    const slider = this.elRef.nativeElement.querySelector(".slider");
    if (slider) {
      (slider as HTMLElement).style.transition = "transform 0.5s ease-in-out";
      (slider as HTMLElement).style.transform = `translateX(${-this.counter * 100}%)`;
      this.counter++;

      if (this.counter === 4) {
        setTimeout(() => {
          (slider as HTMLElement).style.transition = "none";
          (slider as HTMLElement).style.transform = "translateX(0)";
          this.counter = 1;
        }, 500);
      }
    }
  }

  updateCountdown() {
    if (this.product.countdown > 0) {
      this.product.countdown--;
    }
  }


}




