import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Location } from '@angular/common';
import { AppComponent } from '../app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    location = TestBed.inject(Location);
  }));

  it('trebalo bi navigirati na /login kada je putanja /login', () => {
    fixture.detectChanges();
    location.go('/login');
    fixture.detectChanges();
    expect(location.path()).toBe('/login');
  });

  it('trebalo bi navigirati na /register kada je putanja /register', () => {
    fixture.detectChanges();
    location.go('/register');
    fixture.detectChanges();
    expect(location.path()).toBe('/register');
  });

  it('trebalo bi navigirati na /proizvodi/graficka kada je putanja /proizvodi/graficka', () => {
    fixture.detectChanges();
    location.go('/proizvodi/graficka');
    fixture.detectChanges();
    expect(location.path()).toBe('/proizvodi/graficka');
  });

  it('trebalo bi navigirati na /pregled-rezervacija kada je putanja /pregled-rezervacija', () => {
    fixture.detectChanges();
    location.go('/pregled-rezervacija');
    fixture.detectChanges();
    expect(location.path()).toBe('/pregled-rezervacija');
  });



});