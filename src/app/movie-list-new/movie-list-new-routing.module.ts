import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListNewComponent } from './movie-list-new.component';

const routes: Routes = [{ path: '', component: MovieListNewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieListNewRoutingModule { }
