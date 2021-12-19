import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTelephoneComponent } from './input-telephone.component';

describe('InputTelephoneComponent', () => {
  let component: InputTelephoneComponent;
  let fixture: ComponentFixture<InputTelephoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTelephoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTelephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
