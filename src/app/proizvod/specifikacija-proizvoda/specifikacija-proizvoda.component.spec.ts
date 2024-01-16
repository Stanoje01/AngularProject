import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecifikacijaProizvodaComponent } from './specifikacija-proizvoda.component';

describe('SpecifikacijaProizvodaComponent', () => {
  let component: SpecifikacijaProizvodaComponent;
  let fixture: ComponentFixture<SpecifikacijaProizvodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecifikacijaProizvodaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecifikacijaProizvodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
