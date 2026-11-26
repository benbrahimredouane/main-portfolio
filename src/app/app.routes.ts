import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./views/portfolio/portfolio.component').then((m) => m.PortfolioComponent),
  },
  { path: '**', redirectTo: '' },
];
