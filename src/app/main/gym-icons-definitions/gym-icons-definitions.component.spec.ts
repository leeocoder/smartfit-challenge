import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymIconsDefinitionsComponent } from './gym-icons-definitions.component';

describe('GymIconsDefinitionsComponent', () => {
  let component: GymIconsDefinitionsComponent;
  let fixture: ComponentFixture<GymIconsDefinitionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GymIconsDefinitionsComponent]
    });
    fixture = TestBed.createComponent(GymIconsDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
