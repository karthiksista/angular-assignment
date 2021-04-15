import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {
  maxTemp: number;
  minTemp: number;
  total: any;
  mean: number;
  mode: any[];
  temperatureValues = []

  get insert() {
    return this.temperatureForm.get('insert')
  }

  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {

  }
  temperatureForm = this.fb.group({
    insert: [, [Validators.required, Validators.min(1), Validators.max(150)]]
  })

  insertValue(): void {
    this.temperatureValues.push(this.temperatureForm.value.insert)
    this.insert.reset();
  }
  getMax() {

    this.temperatureValues.length ? this.maxTemp = Math.max(...this.temperatureValues) : ''
  }
  getMin() {
    this.temperatureValues.length ? this.minTemp = Math.min(...this.temperatureValues) : ''
  }
  getMode() {
    if (this.temperatureValues.length) {
      let NumberFrequency = {}
      for (let val of this.temperatureValues) {
        if (NumberFrequency[val]) {
          NumberFrequency[val] += 1
        } else {
          NumberFrequency[val] = 1
        }
      }
      let maxFrequency = 1;
      let maxFrequencyKeyList = []
      for (let key in NumberFrequency) {
        if (maxFrequency < NumberFrequency[key]) {
          maxFrequencyKeyList = [Number(key)]
          maxFrequency = NumberFrequency[key]
        } else if (maxFrequency == NumberFrequency[key]) {
          maxFrequencyKeyList.push(Number(key))
        }
      }
      this.mode = maxFrequencyKeyList
    }
  }

  getMean() {
    if (this.temperatureValues.length) {
      let total = this.temperatureValues.reduce((acc, curr) => acc += curr)
      this.mean = total / this.temperatureValues.length
    }
  }
  reset() {
    this.temperatureValues = []
    this.mean = null;
    this.minTemp = null;
    this.maxTemp = null;
    this.mode = []
  }
}
