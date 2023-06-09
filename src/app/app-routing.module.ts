import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'to-do',
    loadChildren: () => import('./to-do/to-do.module').then( m => m.ToDoModule)
  },
  {
    path: '',
    redirectTo: 'to-do/home',
    pathMatch: 'full'
  },
  {
    path : '**',
    redirectTo : 'to-do/home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
