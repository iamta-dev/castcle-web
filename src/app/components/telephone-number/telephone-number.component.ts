import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telephone-number',
  templateUrl: './telephone-number.component.html',
  styleUrls: ['./telephone-number.component.scss']
})

export class TelephoneNumberComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backPage(): void {
    this.router.navigate(['']);
  }

  nextPage(): void {
    this.router.navigate(['verify-otp']);
  }

}
