import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PanicoGuard } from './guards/panico.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'panico',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'informacion',
    loadChildren: () => import('./pages/informacion/informacion.module').then( m => m.InformacionPageModule)
  },
  {
    path: 'panico',
    loadChildren: () => import('./pages/panico/panico.module').then( m => m.PanicoPageModule),
    canLoad : [ PanicoGuard ]
  },
  {
    path: 'iniciosesion',
    loadChildren: () => import('./pages/iniciosesion/iniciosesion.module').then( m => m.IniciosesionPageModule)
  },
  {
    path: 'submenu1',
    loadChildren: () => import('./pages/submenu1/submenu1.module').then( m => m.Submenu1PageModule)
  },
  {
    path: 'submenu2',
    loadChildren: () => import('./pages/submenu2/submenu2.module').then( m => m.Submenu2PageModule)
  },
  {
    path: 'agregar-contacto',
    loadChildren: () => import('./pages/agregar-contacto/agregar-contacto.module').then( m => m.AgregarContactoPageModule)
  },
  {
    path: 'timer',
    loadChildren: () => import('./pages/timer/timer.module').then( m => m.TimerPageModule)
  },
  {
    path: 'confirmacion',
    loadChildren: () => import('./pages/confirmacion/confirmacion.module').then( m => m.ConfirmacionPageModule)
  },
  {
    path: 'editarperfil',
    loadChildren: () => import('./pages/editarperfil/editarperfil.module').then( m => m.EditarperfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
