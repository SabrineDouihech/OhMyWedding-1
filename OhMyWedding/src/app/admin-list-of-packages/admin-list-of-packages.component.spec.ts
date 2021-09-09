import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListOfPackagesComponent } from './admin-list-of-packages.component';

describe('AdminListOfPackagesComponent', () => {
  let component: AdminListOfPackagesComponent;
  let fixture: ComponentFixture<AdminListOfPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListOfPackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListOfPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
