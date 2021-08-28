import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPackageslistComponent } from './admin-packageslist.component';

describe('AdminPackageslistComponent', () => {
  let component: AdminPackageslistComponent;
  let fixture: ComponentFixture<AdminPackageslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPackageslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPackageslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
