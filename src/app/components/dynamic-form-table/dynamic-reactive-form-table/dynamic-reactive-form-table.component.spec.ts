import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicReactiveFormTableComponent } from './dynamic-reactive-form-table.component';

describe('DynamicReactiveFormTableComponent', () => {
  let component: DynamicReactiveFormTableComponent;
  let fixture: ComponentFixture<DynamicReactiveFormTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicReactiveFormTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicReactiveFormTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
