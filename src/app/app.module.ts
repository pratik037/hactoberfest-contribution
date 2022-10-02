import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home-component/home-component.component';
import { CounterComponent } from './components/counter/counter/counter-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CounterOutputComponent } from './components/counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './components/counter/counter-buttons/counter-buttons.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CounterNgrxComponent } from './components/counter-ngrx/counter-ngrx/counter-ngrx.component';
import { CounterOutputNgrxComponent } from './components/counter-ngrx/counter-output-ngrx/counter-output-ngrx.component';
import { CounterButtonNgrxComponent } from './components/counter-ngrx/counter-button-ngrx/counter-button-ngrx.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './components/counter-ngrx/state/counter-ngrx.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CounterNgrxComponent,
    CounterOutputNgrxComponent,
    CounterButtonNgrxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    StoreModule.forRoot({
      counter: counterReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
