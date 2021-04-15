import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  get fname() {
    return this.registrationForm.get('fname')
  }
  get lname() {
    return this.registrationForm.get('lname')
  }
  get phoneNumber() {
    return this.registrationForm.get('phoneNumber')
  }
  get country() {
    return this.registrationForm.get('country')
  }

  constructor(private fb: FormBuilder) { }
  registrationForm = this.fb.group({
    fname: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]+')]],
    lname: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]+')]],
    phoneNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    country: ['', Validators.required]
  })
  ngOnInit() {
    console.log(this.registrationForm)
  }
}
