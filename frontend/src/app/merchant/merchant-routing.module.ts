import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AddMerchantComponent } from './add/add-merchant.component';
import { MerchantsListComponent } from './merchants-list/merchants-list.component';
import { MerchantDetailsComponent } from './merchant-details/merchant-details.component';

const routes: Routes = [
  {
    path: '',
    component: MerchantsListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add',
    component: AddMerchantComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    component: MerchantDetailsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantRoutingModule {}
