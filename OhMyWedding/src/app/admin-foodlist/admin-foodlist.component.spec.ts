import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFoodlistComponent } from './admin-foodlist.component';

describe('AdminFoodlistComponent', () => {
  let component: AdminFoodlistComponent;
  let fixture: ComponentFixture<AdminFoodlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFoodlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFoodlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
