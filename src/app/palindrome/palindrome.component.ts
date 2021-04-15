import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css']
})
export class PalindromeComponent {

  result: boolean;
  anagramForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.anagramForm = this.fb.group({
      word1: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      word2: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    });
  }

  submitVal() {
    this.result = this.anagramForm.value.word1.split('').sort().join('') === this.anagramForm.value.word2.split('').sort().join('');
    this.anagramForm.reset();
  }
}
