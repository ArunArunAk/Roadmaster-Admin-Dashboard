import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeinsurancerequestComponent } from './freeinsurancerequest.component';

describe('FreeinsurancerequestComponent', () => {
  let component: FreeinsurancerequestComponent;
  let fixture: ComponentFixture<FreeinsurancerequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreeinsurancerequestComponent]
    });
    fixture = TestBed.createComponent(FreeinsurancerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
