import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesorComponent } from './procesor.component';

describe('ProcesorComponent', () => {
  let component: ProcesorComponent;
  let fixture: ComponentFixture<ProcesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
