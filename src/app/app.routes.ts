import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  // 🔐 Auth sin layout
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth/auth.page').then(m => m.AuthPage),
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./pages/auth/forgot-password/forgot-password.page').then(m => m.ForgotPasswordPage),
  },
  {
    path: 'signup',
    loadComponent: () => import('./pages/auth/signup/signup.page').then(m => m.SignupPage),
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/dashboard/home/home.page').then(m => m.HomePage),
        data: { title: 'Inicio' },
      },
      // {
      //   path: 'perfil',
      //   loadComponent: () => import('./pages/dashboard/perfil/perfil.page').then(m => m.PerfilPage),
      //   data: { title: 'Perfil' },
      // },
      // {
      //   path: 'configuracion',
      //   loadComponent: () => import('./pages/dashboard/configuracion/configuracion.page').then(m => m.ConfiguracionPage),
      //   data: { title: 'Configuración' },
      // },
    ]
  }
];