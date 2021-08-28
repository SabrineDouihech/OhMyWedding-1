import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInvitaIioncardslistComponent } from './admin-invita-iioncardslist.component';

describe('AdminInvitaIioncardslistComponent', () => {
  let component: AdminInvitaIioncardslistComponent;
  let fixture: ComponentFixture<AdminInvitaIioncardslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInvitaIioncardslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInvitaIioncardslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
