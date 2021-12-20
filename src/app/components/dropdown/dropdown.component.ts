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

  label: string = "dropdown works"
  @Input() dropdownOption: DropdownOption[] = []
  @Output() onSelectOption = new EventEmitter<DropdownOption>();

  constructor() { }

  ngOnInit(): void {
    if (this.dropdownOption.length > 0) this.label = this.dropdownOption[0].label
  }

  showDropDown(event: any) {
    const currentDropdown = event.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
  }

  selectOption(value: string, event: any) {
    const currentDropdown = event.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
    this.dropdownOption.forEach((data) => {
      if (data.value == value) {
        this.label = data.label
        this.onSelectOption.emit(data)
      }
    })
  }
}
