import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';

import { PalindromeComponent } from './palindrome.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('PalindromeComponent', () => {
  let component: PalindromeComponent;
  let fixture: ComponentFixture<PalindromeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PalindromeComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <h2> as Anagram Checker', () => {
    const title: HTMLElement = fixture.nativeElement;
    const h2 = title.querySelector('h2')
    expect(h2.textContent).toEqual('Anagram Checker')
  });

  it('should have a word1 input field ', () => {
    const word1 = component.anagramForm.controls.word1;
    expect(word1.valid).toBeFalsy()
    expect(word1.hasError('required')).toBeTruthy();
    expect(word1.pristine).toBeTruthy();
  });
  it('should be error free after word1 field has entered input values', () => {
    const word1 = component.anagramForm.controls.word1;
    word1.setValue('abc')
    expect(word1.hasError('required')).toBeFalsy();
    expect(word1.valid).toBeTruthy()
  });
  it('should be throw pattern error after word1 field has entered numerical input values', () => {
    const word1 = component.anagramForm.controls.word1;
    word1.setValue('abc1')
    expect(word1.hasError('pattern')).toBeTruthy();
    expect(word1.valid).toBeFalsy()
  });
  it('should have a word1 input field ', () => {
    const word2 = component.anagramForm.controls.word2;
    expect(word2.valid).toBeFalsy()
    expect(word2.hasError('required')).toBeTruthy();
    expect(word2.pristine).toBeTruthy();
  });
  it('should be error free after word2 field has entered input values', () => {
    const word2 = component.anagramForm.controls.word2;
    word2.setValue('abc')
    expect(word2.hasError('required')).toBeFalsy();
    expect(word2.valid).toBeTruthy()

  });
  it('should be throw pattern error after word2 field has entered numerical input values', () => {
    const word2 = component.anagramForm.controls.word2;
    word2.setValue('abc1')
    expect(word2.hasError('pattern')).toBeTruthy();
    expect(word2.valid).toBeFalsy()
  });
  it('should have a button ', () => {
    const title: HTMLElement = fixture.nativeElement;
    const button = title.querySelector('button')
    expect(button.textContent).toEqual('Check Anagram')
  });
  it('should', fakeAsync(() => {
    spyOn(component, 'check');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.check).toHaveBeenCalled();
  }));
  it('should pass anagram check', () => {
    expect(component.check('stop', 'tops')).toBe('Anagram');
  });
  it('should fail anagram check', () => {
    expect(component.check('stop', 'what')).toBe('Not Anagram');
  });
});
