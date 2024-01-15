import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafickaComponent } from './graficka.component';

describe('GrafickaComponent', () => {
  let component: GrafickaComponent;
  let fixture: ComponentFixture<GrafickaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrafickaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafickaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
