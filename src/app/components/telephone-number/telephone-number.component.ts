import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/store/store.service';
import { Country, Telephone } from 'src/models';
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

  constructor(private router: Router, private http: HttpClient, public store: StoreService) { }

  ngOnInit(): void { }

  backPage(): void {
    this.router.navigate(['']);
  }

  nextPage(): void {
    if (this.validatePhoneNumber(this.telephone.phoneNumber)) {
      this.store.setTelephone(this.telephone)
      this.router.navigate(['verify-otp'])
    } else {
      alert('please enter your phone number as numbers only.')
    }
  }

  validatePhoneNumber(phoneNumber: string): boolean {
    const regex = new RegExp(/\d{9}/);
    return regex.test(phoneNumber)
  }

  telephoneChange(phone: Telephone): void {
    this.telephone = phone
    if (this.telephone.code == "" || this.telephone.phoneNumber.length != 9) this.sentOtpDisabled = true
    if (this.telephone.code != "" && this.telephone.phoneNumber.length == 9) this.sentOtpDisabled = false
  }
}
