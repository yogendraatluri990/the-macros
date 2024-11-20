import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
  path: 'login',
  loadComponent: async() => (await import ('@protean/auth/feature-shell-web')).LoginPageComponent
}];
