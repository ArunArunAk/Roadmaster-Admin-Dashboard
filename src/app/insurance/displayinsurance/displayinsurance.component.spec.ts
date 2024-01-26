import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayinsuranceComponent } from './displayinsurance.component';

describe('DisplayinsuranceComponent', () => {
  let component: DisplayinsuranceComponent;
  let fixture: ComponentFixture<DisplayinsuranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayinsuranceComponent]
    });
    fixture = TestBed.createComponent(DisplayinsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
