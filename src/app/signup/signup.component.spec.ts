import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [ReactiveFormsModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <h2> as Registration Form', () => {
    const title: HTMLElement = fixture.nativeElement;
    const h2 = title.querySelector('h2')
    expect(h2.textContent).toEqual('Registration Form')
  });

  // FIRST NAME VALIDATIONS

  it('should have a fname input field ', () => {
    const fname = component.registrationForm.controls.fname;
    expect(fname.valid).toBeFalsy()
    expect(fname.hasError('required')).toBeTruthy();
    expect(fname.hasError('pattern')).toBeFalsy();
    expect(fname.hasError('minlength')).toBeFalsy();
    expect(fname.pristine).toBeTruthy();
  });
  it('should be error free after fname field has entered input values', () => {
    const fname = component.registrationForm.controls.fname;
    fname.setValue('Karthik')
    expect(fname.hasError('required')).toBeFalsy();
    expect(fname.hasError('pattern')).toBeFalsy();
    expect(fname.hasError('minlength')).toBeFalsy();
    expect(fname.valid).toBeTruthy()
  });
  it('should be throw pattern error  after fname field has entered numberinput values', () => {
    const fname = component.registrationForm.controls.fname;
    fname.setValue('Karthik123')
    expect(fname.hasError('required')).toBeFalsy();
    expect(fname.hasError('pattern')).toBeTruthy();
    expect(fname.hasError('minlength')).toBeFalsy();
    expect(fname.valid).toBeFalsy()
  });
  it('should be throw minlength error  after fname field has entered less input values', () => {
    const fname = component.registrationForm.controls.fname;
    fname.setValue('Kart')
    expect(fname.hasError('required')).toBeFalsy();
    expect(fname.hasError('pattern')).toBeFalsy();
    expect(fname.hasError('minlength')).toBeTruthy();
    expect(fname.valid).toBeFalsy()
  });

  // LAST NAME VALIDATIONS

  it('should have a lname input field ', () => {
    const lname = component.registrationForm.controls.lname;
    expect(lname.valid).toBeFalsy()
    expect(lname.hasError('required')).toBeTruthy();
    expect(lname.hasError('pattern')).toBeFalsy();
    expect(lname.hasError('minLength')).toBeFalsy();
    expect(lname.pristine).toBeTruthy();
  });
  it('should be error free after lname field has entered input values', () => {
    const lname = component.registrationForm.controls.lname;
    lname.setValue('Karthik')
    expect(lname.hasError('required')).toBeFalsy();
    expect(lname.hasError('pattern')).toBeFalsy();
    expect(lname.hasError('minlength')).toBeFalsy();
    expect(lname.valid).toBeTruthy()
  });
  it('should be throw pattern error  after lname field has entered numberinput values', () => {
    const lname = component.registrationForm.controls.lname;
    lname.setValue('Karthik123')
    expect(lname.hasError('required')).toBeFalsy();
    expect(lname.hasError('pattern')).toBeTruthy();
    expect(lname.hasError('minlength')).toBeFalsy();
    expect(lname.valid).toBeFalsy()
  });
  it('should be throw minlength error  after lname field has entered less input values', () => {
    const lname = component.registrationForm.controls.lname;
    lname.setValue('Kart')
    expect(lname.hasError('required')).toBeFalsy();
    expect(lname.hasError('pattern')).toBeFalsy();
    expect(lname.hasError('minlength')).toBeTruthy();
    expect(lname.valid).toBeFalsy()
  });

  // PHONENUMBER VALIDATIONS

  it('should have a phoneNumber input field ', () => {
    const phoneNumber = component.registrationForm.controls.phoneNumber;
    expect(phoneNumber.valid).toBeFalsy()
    expect(phoneNumber.hasError('required')).toBeTruthy();
    expect(phoneNumber.hasError('pattern')).toBeFalsy();
    expect(phoneNumber.hasError('minLength')).toBeFalsy();
    expect(phoneNumber.pristine).toBeTruthy();
  });
  it('should be error free after phoneNumber field has entered input values', () => {
    const phoneNumber = component.registrationForm.controls.phoneNumber;
    phoneNumber.setValue(1234551234)
    expect(phoneNumber.hasError('required')).toBeFalsy();
    expect(phoneNumber.hasError('pattern')).toBeFalsy();
    expect(phoneNumber.valid).toBeTruthy()
  });
  it('should throw error  after phoneNumber field has entered string input values', () => {
    const phoneNumber = component.registrationForm.controls.phoneNumber;
    phoneNumber.setValue('karthujsfj')
    expect(phoneNumber.hasError('required')).toBeFalsy();
    expect(phoneNumber.hasError('pattern')).toBeTruthy();
    expect(phoneNumber.valid).toBeFalsy()
  });
  it('should throw error  after phoneNumber field has entered less than 10 input values', () => {
    const phoneNumber = component.registrationForm.controls.phoneNumber;
    phoneNumber.setValue(1234)
    expect(phoneNumber.hasError('required')).toBeFalsy();
    expect(phoneNumber.hasError('pattern')).toBeTruthy();
    expect(phoneNumber.valid).toBeFalsy()
  });

  it('should have a Country select field ', () => {
    const country = component.registrationForm.controls.country;
    expect(country.valid).toBeFalsy()
    expect(country.hasError('required')).toBeTruthy();
    expect(country.pristine).toBeTruthy();
  });
  it('should be error free after country field has been selected', () => {
    const country = component.registrationForm.controls.country;
    country.setValue('India')
    expect(country.hasError('required')).toBeFalsy();
    expect(country.valid).toBeTruthy()
  });
});
