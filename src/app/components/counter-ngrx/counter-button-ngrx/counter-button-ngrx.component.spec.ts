import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterButtonNgrxComponent } from './counter-button-ngrx.component';

describe('CounterButtonNgrxComponent', () => {
  let component: CounterButtonNgrxComponent;
  let fixture: ComponentFixture<CounterButtonNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterButtonNgrxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterButtonNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
