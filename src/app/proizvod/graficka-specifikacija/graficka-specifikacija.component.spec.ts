import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafickaSpecifikacijaComponent } from './graficka-specifikacija.component';

describe('GrafickaSpecifikacijaComponent', () => {
  let component: GrafickaSpecifikacijaComponent;
  let fixture: ComponentFixture<GrafickaSpecifikacijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrafickaSpecifikacijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafickaSpecifikacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
