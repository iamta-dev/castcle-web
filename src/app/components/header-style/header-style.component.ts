import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header-style',
  templateUrl: './header-style.component.html',
  styleUrls: ['./header-style.component.scss']
})
export class HeaderStyleComponent implements OnInit {

  faArrowLeft = faArrowLeft;

  @Input() label: string = "header works"
  @Output() onClick = new EventEmitter<any>();
  arrowBackIcon = 'assets/back_arrow.svg'
  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(event: any) {
    this.onClick.emit(event);
  }

}
