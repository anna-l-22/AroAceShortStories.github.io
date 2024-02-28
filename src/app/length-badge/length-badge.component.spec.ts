import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthBadgeComponent } from './length-badge.component';

describe('LengthBadgeComponent', () => {
  let component: LengthBadgeComponent;
  let fixture: ComponentFixture<LengthBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LengthBadgeComponent]
    });
    fixture = TestBed.createComponent(LengthBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
