import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-ngrx',
  templateUrl: './counter-ngrx.component.html',
  styleUrls: ['./counter-ngrx.component.css']
})
export class CounterNgrxComponent implements OnInit {

  constructor(
    private store: Store<{counter: {counter: number}}>
  ) { }

  ngOnInit(): void {
  }

}
