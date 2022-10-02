import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOutputNgrxComponent } from './counter-output-ngrx.component';

describe('CounterOutputNgrxComponent', () => {
  let component: CounterOutputNgrxComponent;
  let fixture: ComponentFixture<CounterOutputNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterOutputNgrxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterOutputNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
