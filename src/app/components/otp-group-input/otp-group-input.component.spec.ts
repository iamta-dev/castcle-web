import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpGroupInputComponent } from './otp-group-input.component';

describe('OtpGroupInputComponent', () => {
  let component: OtpGroupInputComponent;
  let fixture: ComponentFixture<OtpGroupInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpGroupInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpGroupInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
