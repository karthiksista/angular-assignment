import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {
  maxTemp: number;
  minTemp: number;
  total: any;
  mean: number;
  mode: any[];
  temperatureValues = [];
  temperatureForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.temperatureForm = this.fb.group({
      insert: [, [Validators.required, Validators.min(1), Validators.max(150)]]
    });
  }

  insertValue(): void {
    this.temperatureValues.push(this.temperatureForm.value.insert);
    this.temperatureForm.get('insert').reset();
    this.maxTemp = Math.max(...this.temperatureValues);
    this.minTemp = Math.min(...this.temperatureValues);
    this.calculateMode();
    this.calculateMean();
  }
  get_max() {
    return this.maxTemp;
  }
  get_min() {
    return this.maxTemp;
  }
  get_mode() {
    return this.mode;
  }
  get_mean() {
    return this.mean;
  }

  calculateMode() {
    if (this.temperatureValues.length) {
      const NumberFrequency = {};
      for (const val of this.temperatureValues) {
        if (NumberFrequency[val]) {
          NumberFrequency[val] += 1;
        } else {
          NumberFrequency[val] = 1;
        }
      }
      let maxFrequency = 1;
      let maxFrequencyKeyList = [];
      for (const key in NumberFrequency) {
        if (maxFrequency <= NumberFrequency[key]) {
          maxFrequencyKeyList = [Number(key)];
          maxFrequency = NumberFrequency[key];
        }
      }
      this.mode = maxFrequencyKeyList;
    }
  }

  calculateMean() {
    if (this.temperatureValues.length) {
      const total = this.temperatureValues.reduce((acc, curr) => acc += curr);
      this.mean = total / this.temperatureValues.length;
    }
  }

  reset() {
    this.temperatureValues = [];
    this.mean = null;
    this.minTemp = null;
    this.maxTemp = null;
    this.mode = [];
  }
}
