import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingClothesComponent } from './wedding-clothes.component';

describe('WeddingClothesComponent', () => {
  let component: WeddingClothesComponent;
  let fixture: ComponentFixture<WeddingClothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingClothesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
