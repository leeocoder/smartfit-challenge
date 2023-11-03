import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymInformationCardComponent } from './gym-information-card.component';

describe('GymInformationCardComponent', () => {
  let component: GymInformationCardComponent;
  let fixture: ComponentFixture<GymInformationCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GymInformationCardComponent]
    });
    fixture = TestBed.createComponent(GymInformationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
