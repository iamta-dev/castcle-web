import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-otp-group-input',
  templateUrl: './otp-group-input.component.html',
  styleUrls: ['./otp-group-input.component.scss']
})
export class OtpGroupInputComponent implements OnInit {

  @Input() digitNumber: number = 0
  @Input() otpGroup: string[] = []
  @Output() otpGroupChange = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit(): void {
    this.otpGroup = Array.from(Array(this.digitNumber), () => "")
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
    this.otpGroupChange.emit(this.otpGroup)
  }

  onFocusEvent(index: any, event: any) {
    this.otpGroup[index] = "";
    this.otpGroupChange.emit(this.otpGroup)
  }
}
