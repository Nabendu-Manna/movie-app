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
  },
  { path: 'movie-list-new', loadChildren: () => import('./movie-list-new/movie-list-new.module').then(m => m.MovieListNewModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
