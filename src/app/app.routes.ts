import { Routes } from '@angular/router';
import { ClientList } from './pages/client/client-list/client-list';
import { Login } from './pages/auth/login/login';
import { Layout } from './pages/auth/layout/layout';
import { ClientForm } from './pages/client/client-form/client-form';
import { authGuard } from './core/guards/auth-guard';
import { AddCustomer } from './pages/customer/add-customer/add-customer';
import { CustomerList } from './pages/customer/customer-list/customer-list';
import { Warehousemaster } from './pages/warehouse/warehousemaster/warehousemaster';
import { PageNotFound } from './pages/page-not-found/page-not-found';

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
    path: 'page-not-found',
    component: PageNotFound
  },
  {
    path: 'admin',
    component:Layout,
    canActivate: [authGuard],
    children:[
      {
        path: 'client-list',
        component: ClientList
      },
      {
        path: 'client-form',
        component: ClientForm
      },
      {
        path: 'add-customer',
        component: AddCustomer
      },
      {
        path: 'customer-list',
        component: CustomerList
      },
      {
        path: 'warehouse-list',
        component: Warehousemaster
      }
      
    ]
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
  }
  
];
