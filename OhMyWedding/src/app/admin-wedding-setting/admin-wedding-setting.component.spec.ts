import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWeddingSettingComponent } from './admin-wedding-setting.component';

describe('AdminWeddingSettingComponent', () => {
  let component: AdminWeddingSettingComponent;
  let fixture: ComponentFixture<AdminWeddingSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminWeddingSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWeddingSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
