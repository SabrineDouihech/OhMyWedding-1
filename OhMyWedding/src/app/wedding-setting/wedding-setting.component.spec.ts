import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingSettingComponent } from './wedding-setting.component';

describe('WeddingSettingComponent', () => {
  let component: WeddingSettingComponent;
  let fixture: ComponentFixture<WeddingSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
