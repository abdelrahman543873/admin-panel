import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HealthComponent } from './health/health.component';

const routes: Routes = [
  { path: 'frontend/health', component: HealthComponent, pathMatch: 'full' },
  {
    path: 'frontend/auth',
    pathMatch: 'full',
    loadChildren: () =>
      import('../app/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'frontend/home',
    pathMatch: 'full',
    loadChildren: () =>
      import('../app/home/home.module').then((m) => m.HomeModule),
  },
  { path: '**', redirectTo: 'frontend/auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
