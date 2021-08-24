import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationCardsComponent } from './invitation-cards.component';

describe('InvitationCardsComponent', () => {
  let component: InvitationCardsComponent;
  let fixture: ComponentFixture<InvitationCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitationCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
