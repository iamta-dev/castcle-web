import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { TelephoneNumberComponent } from './components/telephone-number/telephone-number.component';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'telephone-number',
    component: TelephoneNumberComponent,
  },
  {
    path: 'verify-otp',
    component: VerifyOtpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
