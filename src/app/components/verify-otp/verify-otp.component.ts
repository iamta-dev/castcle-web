import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {

  sentOtpDisabled: boolean = true

  otpGroup: string[] = []
  digitNumber = 6
  otpTimeOut = 10
  countDownTimeOut = this.otpTimeOut


  constructor(private router: Router) { }

  ngOnInit(): void {

    this.countDownVerifyOTP(this.otpTimeOut)
  }

  countDownVerifyOTP(timeout: number): void {
    interval(1000).pipe(take(timeout)).subscribe(() => {
      this.countDownTimeOut = this.countDownTimeOut - 1
      if (this.countDownTimeOut == 0) this.verifyOTPTimeOut()
    })
  }

  verifyOTPTimeOut(): void {
    this.sentOtpDisabled = true;
  }

  backPage(): void {
    this.router.navigate(['telephone-number']);
  }

  nextPage(): void {
    this.router.navigate(['verify-otp']);
  }

  otpGroupChange(otp: string): void {
    if (this.countDownTimeOut == 0) {
      this.sentOtpDisabled = true
    } else {
      this.sentOtpDisabled = otp.length != this.digitNumber
    }
  }

  onSendAgain(event: any): void {
    this.countDownTimeOut = this.otpTimeOut
    this.countDownVerifyOTP(this.otpTimeOut)
  }

}
