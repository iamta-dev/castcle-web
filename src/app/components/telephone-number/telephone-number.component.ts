import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Telephone } from 'src/models';

@Component({
  selector: 'app-telephone-number',
  templateUrl: './telephone-number.component.html',
  styleUrls: ['./telephone-number.component.scss']
})

export class TelephoneNumberComponent implements OnInit {

  sentOtpDisabled: boolean = true

  telephone: Telephone = {
    country: '',
    code: '',
    phoneNumber: '',
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backPage(): void {
    this.router.navigate(['']);
  }

  nextPage(): void {
    this.router.navigate(['verify-otp']);
  }

  telephoneChange(phone: Telephone): void {
    this.telephone = phone
    if (this.telephone.code == "" || this.telephone.phoneNumber.length != 8) this.sentOtpDisabled = true
    if (this.telephone.code != "" && this.telephone.phoneNumber.length == 8) this.sentOtpDisabled = false
  }
}
