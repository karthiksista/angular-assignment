import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registered: boolean;
  registeredMessage: string;
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      fname: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]+')]],
      lname: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]+')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      country: [, Validators.required]
    });
  }
  register() {
    this.registered = true;
    this.registeredMessage = 'Your account has been created';
  }
  reset() {
    this.registered = false;
    this.registrationForm.reset();
  }
}
