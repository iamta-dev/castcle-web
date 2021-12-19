import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp-group-input',
  templateUrl: './otp-group-input.component.html',
  styleUrls: ['./otp-group-input.component.scss']
})
export class OtpGroupInputComponent implements OnInit {

  @Input() digiNumber: number = 0

  otpGroup: string[] = []

  constructor() { }

  ngOnInit(): void {
    this.otpGroup = Array.from(Array(this.digiNumber), () => "")
    this.getCodeBoxElement(0)?.focus()
  }

  getCodeBoxElement(index: number): HTMLElement | null {
    return document.getElementById('codeBox' + index);
  }
  onKeyUpEvent(index: number, event: any) {
    if (event.key == "Backspace" || event.keyCode == 32) {
      if (index !== 0) {
        this.getCodeBoxElement(index - 1)?.focus()
      }
    } else {
      this.otpGroup[index] = event.target.value.charAt(event.target.value.length - 1)
      if (index !== this.otpGroup.length - 1) {
        this.getCodeBoxElement(index + 1)?.focus()
      }
    }
  }

  onFocusEvent(index: any, event: any) {
    this.otpGroup[index] = "";
  }
}
