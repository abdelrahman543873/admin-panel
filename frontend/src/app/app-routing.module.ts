import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'frontend/auth', pathMatch: 'full' },
  {
    path: 'frontend',
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('../app/auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../app/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
  { path: '**', redirectTo: 'frontend/auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
