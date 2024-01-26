import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimrequestComponent } from './claimrequest.component';

describe('ClaimrequestComponent', () => {
  let component: ClaimrequestComponent;
  let fixture: ComponentFixture<ClaimrequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClaimrequestComponent]
    });
    fixture = TestBed.createComponent(ClaimrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
