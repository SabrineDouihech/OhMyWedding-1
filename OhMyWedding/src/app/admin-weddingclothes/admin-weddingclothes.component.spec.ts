import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWeddingclothesComponent } from './admin-weddingclothes.component';

describe('AdminWeddingclothesComponent', () => {
  let component: AdminWeddingclothesComponent;
  let fixture: ComponentFixture<AdminWeddingclothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminWeddingclothesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWeddingclothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
