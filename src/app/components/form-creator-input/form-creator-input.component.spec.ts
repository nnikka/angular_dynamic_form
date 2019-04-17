import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreatorInputComponent } from './form-creator-input.component';

describe('FormCreatorInputComponent', () => {
  let component: FormCreatorInputComponent;
  let fixture: ComponentFixture<FormCreatorInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCreatorInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreatorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
