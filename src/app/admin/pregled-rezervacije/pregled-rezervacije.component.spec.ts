import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledRezervacijeComponent } from './pregled-rezervacije.component';

describe('PregledRezervacijeComponent', () => {
  let component: PregledRezervacijeComponent;
  let fixture: ComponentFixture<PregledRezervacijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregledRezervacijeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledRezervacijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
