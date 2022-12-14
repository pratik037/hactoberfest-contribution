import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  switchToCounter(){
    this.router.navigate(['counter-app'])
  }

  switchToCounterNGRX(){
    this.router.navigate(['counter-app-ngrx'])
  }

  switchToTestComp(){
    this.router.navigate(['test-component'])
  }

}
