import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchantRoutingModule } from './merchant-routing.module';
import { AddMerchantComponent } from './add/add-merchant.component';
import { FormsModule } from '@angular/forms';
import { MerchantsListComponent } from './merchants-list/merchants-list.component';
import { MerchantDetailsComponent } from './merchant-details/merchant-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateMerchantComponent } from './update-merchant/update-merchant.component';
import { CampaignModule } from '../campaign/campaign.module';
import { BranchModule } from '../branch/branch.module';
import { ToastModule } from '../shared/components/toast/toast.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MerchantRoutingModule,
    CampaignModule,
    BranchModule,
    ToastModule,
  ],
  declarations: [
    AddMerchantComponent,
    MerchantsListComponent,
    MerchantDetailsComponent,
    UpdateMerchantComponent,
  ],
})
export class MerchantModule {}
