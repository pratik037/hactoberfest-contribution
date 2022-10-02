import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter-ngrx.actions';

@Component({
  selector: 'app-counter-button-ngrx',
  templateUrl: './counter-button-ngrx.component.html',
  styleUrls: ['./counter-button-ngrx.component.css']
})
export class CounterButtonNgrxComponent implements OnInit {

  constructor(
    private store: Store<{ counter: { counter: number } }>
  ) { }

  ngOnInit(): void {
  }

  onIncrement() {
    this.store.dispatch(increment())
  }

  onDecrement() {
    this.store.dispatch(decrement())
  }

  onReset() {
    this.store.dispatch(reset());
  }

}
