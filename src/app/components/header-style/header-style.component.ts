import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-style',
  templateUrl: './header-style.component.html',
  styleUrls: ['./header-style.component.scss']
})
export class HeaderStyleComponent implements OnInit {

  @Input() label: string = "button works"
  @Output() onClick = new EventEmitter<any>();
  iconImg = 'assets/back_arrow.svg'
  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(event: any) {
    this.onClick.emit(event);
  }

}
