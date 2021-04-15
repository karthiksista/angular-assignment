import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { SignupComponent } from './signup/signup.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'register', component: SignupComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: 'palindrome', component: PalindromeComponent },
  { path: 'temperature', component: TemperatureComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [WelcomeComponent, SignupComponent, ThankyouComponent, PalindromeComponent, TemperatureComponent]