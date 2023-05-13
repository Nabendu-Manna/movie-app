import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'movie-list',
    loadChildren: () => import('./movie-list/movie-list.module').then(m => m.MovieListModule)
  }, {
    path: '',
    redirectTo: 'movie-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
