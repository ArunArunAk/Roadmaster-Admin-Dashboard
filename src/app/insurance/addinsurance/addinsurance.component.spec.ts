import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinsuranceComponent } from './addinsurance.component';

describe('AddinsuranceComponent', () => {
  let component: AddinsuranceComponent;
  let fixture: ComponentFixture<AddinsuranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddinsuranceComponent]
    });
    fixture = TestBed.createComponent(AddinsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
