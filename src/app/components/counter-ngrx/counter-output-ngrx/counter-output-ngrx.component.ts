import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output-ngrx',
  templateUrl: './counter-output-ngrx.component.html',
  styleUrls: ['./counter-output-ngrx.component.css']
})
export class CounterOutputNgrxComponent implements OnInit {

  counter!: number;
  constructor(
    private store: Store<{ counter: { counter: number } }>
  ) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe((data)=> {
      this.counter = data.counter;
    })
  }

}
