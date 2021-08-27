import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDachComponent } from './admin-dach.component';

describe('AdminDachComponent', () => {
  let component: AdminDachComponent;
  let fixture: ComponentFixture<AdminDachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
