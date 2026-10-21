import { Routes } from '@angular/router';
import { ClientList } from './pages/client/client-list/client-list';
import { Login } from './pages/auth/login/login';
import { Layout } from './pages/auth/layout/layout';
import { ClientForm } from './pages/client/client-form/client-form';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: "login",
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'admin',
    component:Layout,
    children:[
      {
        path: 'client-list',
        component: ClientList
      },
      {
        path: 'client-form',
        component: ClientForm
      }
    ]
  },
  
];
