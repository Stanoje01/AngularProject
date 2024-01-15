import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesorSpecifikacijaComponent } from './procesor-specifikacija.component';

describe('ProcesorSpecifikacijaComponent', () => {
  let component: ProcesorSpecifikacijaComponent;
  let fixture: ComponentFixture<ProcesorSpecifikacijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesorSpecifikacijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesorSpecifikacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
