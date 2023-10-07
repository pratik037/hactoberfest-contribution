import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { counterReducer } from './components/counter-ngrx/state/counter-ngrx.reducer';
import { CounterButtonsComponent } from './components/counter/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './components/counter/counter-output/counter-output.component';
import { CounterComponent } from './components/counter/counter/counter-component.component';
import { HomeComponent } from './components/home-component/home-component.component';
import { DashoardTableComponent } from './components/new-contribution/dashoard-table/dashoard-table.component';
import { TestCompComponent } from './components/test-comp/test-comp.component';

import { DynamicReactiveFormTableComponent } from './components/dynamic-form-table/dynamic-reactive-form-table/dynamic-reactive-form-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    TestCompComponent,
    DashoardTableComponent,
    DynamicReactiveFormTableComponent
    DashoardTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    // StoreModule.forRoot({
    //   counter: counterReducer
    // }),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
