import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopRacunarComponent } from './desktop-racunar.component';

describe('DesktopRacunarComponent', () => {
  let component: DesktopRacunarComponent;
  let fixture: ComponentFixture<DesktopRacunarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopRacunarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopRacunarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
