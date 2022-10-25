import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'merchant',
        loadChildren: () =>
          import('../merchant/merchant.module').then((m) => m.MerchantModule),
      },
      {
        path: 'branch',
        loadChildren: () =>
          import('../branch/branch.module').then((m) => m.BranchModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
