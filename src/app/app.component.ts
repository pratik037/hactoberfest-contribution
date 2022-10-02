import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NGRX App';

  constructor(private router: Router){}

  navigateToHome(){
    this.router.navigate([''])
  }
}


/**
 * NGRX basics
 * 
 * Components -> Action -> Reducer + Old State (from Store) -> New state updated in Store -> Updates the selector -> Data flows to Component
 * Centralised store where the state is stored.
 */
