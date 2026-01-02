import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisneyCards } from './disney-cards';

describe('DisneyCards', () => {
  let component: DisneyCards;
  let fixture: ComponentFixture<DisneyCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisneyCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisneyCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
