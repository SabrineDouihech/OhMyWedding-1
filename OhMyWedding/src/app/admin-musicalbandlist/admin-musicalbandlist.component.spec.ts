import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMusicalbandlistComponent } from './admin-musicalbandlist.component';

describe('AdminMusicalbandlistComponent', () => {
  let component: AdminMusicalbandlistComponent;
  let fixture: ComponentFixture<AdminMusicalbandlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMusicalbandlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMusicalbandlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
