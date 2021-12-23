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
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CachingInterceptor } from './interceptors/caching.interceptor';

import { CountryService } from './services/country.service'
import { HttpErrorsInterceptor } from './interceptors/http-errors.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TelephoneNumberComponent,
    VerifyOtpComponent,
    ButtonStyleComponent,
    InputTelephoneComponent,
    HeaderStyleComponent,
    OtpGroupInputComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [
    CountryService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorsInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CachingInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
