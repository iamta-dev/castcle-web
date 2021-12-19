import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backPage(): void {
    this.router.navigate(['telephone-number']);
  }

  nextPage(): void {
    this.router.navigate(['verify-otp']);
  }

}
