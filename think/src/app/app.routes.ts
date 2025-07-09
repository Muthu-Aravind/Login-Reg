// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { register } from 'module';
import { RegistrationComponent } from './pages/registration/registration';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'register',
    component: RegistrationComponent
  }
];
