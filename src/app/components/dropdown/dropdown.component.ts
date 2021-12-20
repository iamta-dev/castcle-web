import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { DropdownOption } from 'src/models';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  faChevronDown = faChevronDown;

  @Input() dropdownOption: DropdownOption[] = []
  @Output() onSelectOption = new EventEmitter<string>();
  dropdownValue: DropdownOption = { label: "Thai", value: "+66" }
  constructor() { }

  ngOnInit(): void {

  }

  showDropDown(event: any) {
    const currentDropdown = event.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
  }

  selectOption(value: string, event: any) {
    console.log("selectOption", value)
    this.dropdownOption.forEach((data) => {
      if (data.value == value) this.dropdownValue = data
    })
    const currentDropdown = event.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")

    this.onSelectOption.emit(value)
  }


}
