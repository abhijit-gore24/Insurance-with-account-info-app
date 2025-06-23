import { Routes } from '@angular/router';

// Define your routes
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'cnadashboard',
    loadChildren: () =>
      import('./features/cna-dashboard/cna-dashboard.module').then(
        (m) => m.CnaDashboardModule
      ),
  },

  { path: '**', redirectTo: 'login' },
];
