import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter/counter-component.component';
import { HomeComponent } from './components/home-component/home-component.component';
import { TestCompComponent } from './components/test-comp/test-comp.component';

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
    path:'test-component',
    component:TestCompComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
