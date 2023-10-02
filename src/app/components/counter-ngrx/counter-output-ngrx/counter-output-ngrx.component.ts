import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterState } from '../state/counter-ngrx.state';

@Component({
  selector: 'app-counter-output-ngrx',
  templateUrl: './counter-output-ngrx.component.html',
  styleUrls: ['./counter-output-ngrx.component.css']
})
export class CounterOutputNgrxComponent implements OnInit {
  counter$! : Observable<{counter: number}>;
  constructor(
    private store: Store<{ counter: CounterState }>
  ) { }

  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
  }

}
