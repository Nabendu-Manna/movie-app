import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-app';
  version = new FormControl('movie-list-new');
  
  constructor(
    private router: Router
  ) { }

  goToV1() {
    this.version.setValue('movie-list-new');
    this.router.navigate(['/movie-list-new']);
  }
  goToV2() {
    this.version.setValue('movie-list');
    this.router.navigate(['/movie-list']);
  }

}