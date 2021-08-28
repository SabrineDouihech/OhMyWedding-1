import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarslistComponent } from './admin-carslist.component';

describe('AdminCarslistComponent', () => {
  let component: AdminCarslistComponent;
  let fixture: ComponentFixture<AdminCarslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCarslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCarslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
