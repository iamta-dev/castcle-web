import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  usersImg = 'assets/avatars.svg'

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backPage(): void {
    this.router.navigate(['']);
  }

  nextPage(): void {
    this.router.navigate(['telephone-number']);
  }

}
