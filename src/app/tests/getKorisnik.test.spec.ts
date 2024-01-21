import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BazaService } from '../services/baza.service';



describe('BazaService', () => {
    let service: BazaService;
    let httpTestingController: HttpTestingController;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [BazaService]
      });
  
      service = TestBed.inject(BazaService);
      httpTestingController = TestBed.inject(HttpTestingController);
    });
  
    afterEach(() => {
      httpTestingController.verify();
    });
  
    it('trebalo bi dobiti listu korisnika', () => {
      // Pripremi lažni odgovor koji će simulirati odgovor sa servera
      const fakeResponse = [
        {
          "id": 1,
          "rola": "admin",
          "username": "Aca",
          "password": "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92",
          "email": ""
        },
        {
          "id": 2,
          "rola": "admin",
          "username": "marko",
          "password": "e3c4a8e68c23890091f9b9531ef3e0f805ce0a9378d6fb4bbcb6eed403c91342",
          "email": ""
        }
      ];
  
      // Pozovi metodu getKorisnik
      service.getKorisnik().subscribe(response => {
        // Proveri da li je odgovor definisan
        expect(response).toBeDefined();
  
        // Dodaj više očekivanja u skladu sa strukturom tvojih API odgovora
        expect(response.length).toBe(2);
        expect(response[0].username).toBe('Aca');
        expect(response[1].username).toBe('marko');
  
        // Dodaj ispisivanje informacija u konzolu
        console.log('Dobijeni odgovor:', response);
      });
  
      // Očekujemo da je izvršen HTTP GET zahtev ka određenom URL-u
      const req = httpTestingController.expectOne('http://localhost:3000/korisnik');
      expect(req.request.method).toBe('GET');
  
      // Simuliraj uspešan odgovor od servera
      req.flush(fakeResponse);
    });
  });
