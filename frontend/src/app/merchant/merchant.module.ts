import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchantRoutingModule } from './merchant-routing.module';
import { AddMerchantComponent } from './add/add-merchant.component';
import { FormsModule } from '@angular/forms';
import { MerchantsListComponent } from './merchants-list/merchants-list.component';
import { MerchantDetailsComponent } from './merchant-details/merchant-details.component';
import { BranchModule } from '../branch/branch.module';

@NgModule({
  declarations: [
    AddMerchantComponent,
    MerchantsListComponent,
    MerchantDetailsComponent,
  ],
  imports: [CommonModule, MerchantRoutingModule, FormsModule, BranchModule],
})
export class MerchantModule {}
