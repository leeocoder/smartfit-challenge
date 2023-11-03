import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymAvailabilityFilterComponent } from './gym-availability-filter.component';

describe('GymAvailabilityFilterComponent', () => {
  let component: GymAvailabilityFilterComponent;
  let fixture: ComponentFixture<GymAvailabilityFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GymAvailabilityFilterComponent]
    });
    fixture = TestBed.createComponent(GymAvailabilityFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
