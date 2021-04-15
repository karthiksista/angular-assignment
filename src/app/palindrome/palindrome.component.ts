import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css']
})
export class PalindromeComponent implements OnInit {

  get word1() {
    return this.anagramForm.get('word1')
  }
  get word2() {
    return this.anagramForm.get('word2')
  }
  result = ''

  constructor(private fb: FormBuilder) { }
  anagramForm = this.fb.group({
    word1: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    word2: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
  })
  ngOnInit() {
  }
  submitVal() {
    if (this.anagramForm.valid) {
      this.check(this.anagramForm.value.word1, this.anagramForm.value.word2);
      this.anagramForm.reset();
    }
  }
  check(x: string, y: string) {
    const sorted1 = x.split('').sort().join('')
    const sorted2 = y.split('').sort().join('')
    if (sorted1 === sorted2) {
      return this.result = 'Anagram'
    } else {
      return this.result = 'Not Anagram'
    }
  }
}
