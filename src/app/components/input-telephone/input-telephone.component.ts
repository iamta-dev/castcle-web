import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropdownOption, Country, Telephone } from 'src/models';
import { CountryService } from 'src/app/services/country.service';
import { map } from 'rxjs';


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
  @Output() telephoneChange = new EventEmitter<Telephone>()

  countryOption: DropdownOption[] = []

  constructor(public countryService: CountryService) { }

  ngOnInit(): void {
    this.setCountryOption()
  }

  setCountryOption(): void {
    this.countryService.getCountrys()
      .pipe(
        map((data: any) => {
          return data.payload.map((country: Country) => {
            return { label: country.name, value: country.dialCode }
          })
        }),
      )
      .subscribe(
        (result: DropdownOption[]) => {
          if (result.length > 0) {
            this.telephone.country = result[0].label
            this.telephone.code = result[0].value
          }
          this.countryOption = result
        },
      )
  }

  changePhoneNumber(value: string) {
    this.telephone.phoneNumber = value
    this.telephoneChange.emit(this.telephone)
  }

  changeCountryCode(option: DropdownOption): void {
    this.telephone.country = option.label
    this.telephone.code = option.value
    this.telephoneChange.emit(this.telephone)
  }

}
