import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-style',
  templateUrl: './button-style.component.html',
  styleUrls: ['./button-style.component.scss']
})
export class ButtonStyleComponent implements OnInit {

  @Input() label: string = "button works"
  @Input() disabled: boolean = false
  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(event: any) {
    this.onClick.emit(event);
  }

}
