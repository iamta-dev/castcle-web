import { Component, OnInit } from '@angular/core';
import { PhoneCountryCode, PhoneNumber } from 'src/models';

@Component({
  selector: 'app-input-telephone',
  templateUrl: './input-telephone.component.html',
  styleUrls: ['./input-telephone.component.scss']
})
export class InputTelephoneComponent implements OnInit {

  public phoneCountryCode: Array<PhoneCountryCode> = []
  public phoneNumber: PhoneNumber = {
    country: '',
    code: '',
    phoneNumber: '095XXXXX',
  }

  constructor() { }

  ngOnInit(): void {
    this.phoneCountryCode = [{ country: "Thai", code: "+66" }, { country: "Eng", code: "+99" }, { country: "Age", code: "+11" }]
    this.phoneNumber.country = this.phoneCountryCode[0].country
    this.phoneNumber.code = this.phoneCountryCode[0].code
  }

  setPhoneCountryCode(country: string): void {
    this.phoneNumber.country = country;
    this.phoneCountryCode.forEach((data) => {
      if (data.country == country) this.phoneNumber.code = data.code
    })
  }

}
