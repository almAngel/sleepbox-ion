import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'stats',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../stats/stats.module').then(m => m.StatsPageModule),
            canActivate: [/*AuthGuardService*/]
          }
        ]
      },
      {
        path: 'config',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../config/config.module').then(m => m.ConfigPageModule),
            canActivate: [/*AuthGuardService*/]
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/stats',
        pathMatch: 'full'
      }

    ]
  },
  {
    path: '',
    redirectTo: '/home/stats',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
