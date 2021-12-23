import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { StoreService } from 'src/app/store/store.service';
import { Telephone } from 'src/models';
import { randomString } from 'src/utils';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {

  sentOtpDisabled: boolean = true

  telephone: Telephone = {
    country: '',
    code: '',
    phoneNumber: '',
  }
  otpRef: string = ''

  otpGroup: string[] = []
  digitNumber = 6
  otpTimeOut = 60
  countDownTimeOut = this.otpTimeOut
  countDownInterval = interval(1000)


  constructor(private router: Router, public store: StoreService) { }

  ngOnInit(): void {
    this.store.telephone$.subscribe(data => {
      if ([data.phoneNumber, data.code].includes("")) this.backPage()
      this.telephone.code = data.code
      this.telephone.phoneNumber = data.phoneNumber
    })
    this.getOTPRef()
    this.countDownVerifyOTP(this.otpTimeOut)
  }

  backPage(): void {
    this.router.navigate(['telephone-number']);
  }

  nextPage(): void {
    const otpCode = this.otpGroup.reduce((acc, val) => String(acc) + String(val), "")
    this.store.setOtpCode(otpCode)

    this.store.register$.subscribe(data => {
      alert(`
      Register
        phone: ${data.telephone.code + " " + data.telephone.phoneNumber}
        otp: ${data.otpCode}
      `)
    })
    this.router.navigate(['verify-otp']);
  }

  getOTPRef(): void {
    // mock service api
    this.otpRef = randomString(8)
  }

  countDownVerifyOTP(timeout: number): void {
    this.countDownInterval.pipe(take(timeout)).subscribe(() => {
      this.countDownTimeOut = this.countDownTimeOut - 1
      if (this.countDownTimeOut < 1) this.verifyOTPTimeOut()
    })
  }

  verifyOTPTimeOut(): void {
    this.sentOtpDisabled = true;
  }

  otpGroupChange(otp: string[]): void {
    this.otpGroup = otp
    if (this.countDownTimeOut == 0) {
      this.sentOtpDisabled = true
    } else {
      this.sentOtpDisabled = otp.length != this.digitNumber || otp.includes("")
    }
  }

  onSendAgain(): void {
    this.verifyOTPTimeOut()
    this.getOTPRef()
    this.otpGroup = this.otpGroup.map(() => "")
    this.countDownTimeOut = this.otpTimeOut
    this.countDownVerifyOTP(this.otpTimeOut)
  }

}
