import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigacijaAdminComponent } from './navigacija-admin.component';

describe('NavigacijaAdminComponent', () => {
  let component: NavigacijaAdminComponent;
  let fixture: ComponentFixture<NavigacijaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigacijaAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigacijaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
