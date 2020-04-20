import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'linear',
    loadChildren: () => import('./pages/linear/linear.module').then( m => m.LinearPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
