import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { TelephoneNumberComponent } from './components/telephone-number/telephone-number.component';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';
import { ButtonStyleComponent } from './components/button-style/button-style.component';
import { InputTelephoneComponent } from './components/input-telephone/input-telephone.component';
import { HeaderStyleComponent } from './components/header-style/header-style.component';
import { OtpGroupInputComponent } from './components/otp-group-input/otp-group-input.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TelephoneNumberComponent,
    VerifyOtpComponent,
    ButtonStyleComponent,
    InputTelephoneComponent,
    HeaderStyleComponent,
    OtpGroupInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
