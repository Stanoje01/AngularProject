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

  it('trebalo bi postaviti korisnika', () => {
    // Podaci koje želite poslati sa POST zahtevom
    const userData = {
      rola: 'admin',
      username: 'NoviKorisnik',
      password: 'novasifra',
      email: 'novi@example.com'
    };

    // Pozovi metodu postKorisnik
    service.postKorisnik(userData).subscribe(response => {
      // Proveri da li je odgovor definisan
      expect(response).toBeDefined();

      // Dodaj više očekivanja u skladu sa strukturom tvojih API odgovora
      expect(response.username).toBe('NoviKorisnik');
      expect(response.email).toBe('novi@example.com');

      // Dodaj ispisivanje informacija u konzolu
      console.log('Kreirani korisnik:', response);
    });

    // Očekujemo da je izvršen HTTP POST zahtev ka određenom URL-u
    const req = httpTestingController.expectOne('http://localhost:3000/korisnik');
    expect(req.request.method).toBe('POST');

    // Simuliraj uspešan odgovor od servera
    const fakeResponse = {
      id: 3,
      rola: 'admin',
      username: 'NoviKorisnik',
      password: 'novasifra',
      email: 'novi@example.com'
    };
    req.flush(fakeResponse);
  });
});
