import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopSpecifikacijaComponent } from './desktop-specifikacija.component';

describe('DesktopSpecifikacijaComponent', () => {
  let component: DesktopSpecifikacijaComponent;
  let fixture: ComponentFixture<DesktopSpecifikacijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopSpecifikacijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopSpecifikacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
