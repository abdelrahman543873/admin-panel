import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HealthComponent } from './health/health.component';

const routes: Routes = [
  { path: '', redirectTo: 'frontend/auth', pathMatch: 'full' },
  {
    path: 'frontend',
    children: [
      { path: 'health', component: HealthComponent },
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
  { path: '**', component: HealthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
