import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-style',
  templateUrl: './button-style.component.html',
  styleUrls: ['./button-style.component.scss']
})
export class ButtonStyleComponent implements OnInit {

  @Input() label: string = "button works"
  @Output() onClick = new EventEmitter<any>();

  buttonConfig = {
    styles: {
      backgroundColor: '#02D2FF',
      border: '#02D2FF',
      width: '300px',
      height: '60px',
      color: '#fff',
      fontFamily: 'sans-serif',
      fontSize: '20px',
      borderRadius: '40px',
    },
    text: 'Click Here'
  };

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(event: any) {
    this.onClick.emit(event);
  }

}
