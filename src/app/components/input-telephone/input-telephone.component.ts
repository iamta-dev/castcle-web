import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropdownOption, PhoneCountryCode, Telephone } from 'src/models';

@Component({
  selector: 'app-input-telephone',
  templateUrl: './input-telephone.component.html',
  styleUrls: ['./input-telephone.component.scss']
})
export class InputTelephoneComponent implements OnInit {

  @Input() telephone: Telephone = {
    country: '',
    code: '',
    phoneNumber: '',
  }

  @Output() telephoneChange = new EventEmitter<Telephone>();
  phoneCountryCode: Array<PhoneCountryCode> = []
  dropdownOption: DropdownOption[] = []

  constructor() { }

  ngOnInit(): void {
    this.phoneCountryCode = [{ country: "Thai", code: "+66" }, { country: "Eng", code: "+99" }, { country: "Age", code: "+11" }]
    this.telephone.country = this.phoneCountryCode[0].country
    this.telephone.code = this.phoneCountryCode[0].code

    this.dropdownOption = this.phoneCountryCode.map((data) => {
      return { label: data.country, value: data.code }
    })
    this.telephoneChange.emit(this.telephone)
  }

  changeCountryCode(option: DropdownOption): void {
    this.telephone.country = option.label
    this.telephone.code = option.value
    this.telephoneChange.emit(this.telephone)
  }

  changePhoneNumber(event: any) {
    this.telephoneChange.emit(this.telephone)
  }

}
