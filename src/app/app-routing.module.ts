import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CounterNgrxComponent } from './components/counter-ngrx/counter-ngrx/counter-ngrx.component';
import { CounterComponent } from './components/counter/counter/counter-component.component';
import { HomeComponent } from './components/home-component/home-component.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'counter-app',
    component: CounterComponent
  },
  {
    path: 'counter-app-ngrx',
    component: CounterNgrxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
