import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TelephoneNumberComponent } from './components/telephone-number/telephone-number.component';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';
import { ButtonStyleComponent } from './components/button-style/button-style.component';
import { InputTelephoneComponent } from './components/input-telephone/input-telephone.component';
import { InputOtpComponent } from './components/input-otp/input-otp.component';
import { HeaderStyleComponent } from './components/header-style/header-style.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TelephoneNumberComponent,
    VerifyOtpComponent,
    ButtonStyleComponent,
    InputTelephoneComponent,
    InputOtpComponent,
    HeaderStyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
