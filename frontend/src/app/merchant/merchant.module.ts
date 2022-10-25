import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchantRoutingModule } from './merchant-routing.module';
import { AddMerchantComponent } from './add/add-merchant.component';
import { FormsModule } from '@angular/forms';
import { MerchantsListComponent } from './merchants-list/merchants-list.component';
import { MerchantDetailsComponent } from './merchant-details/merchant-details.component';
import { CampaignListComponent } from '../campaign/campaign-list/campaign-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BranchListComponent } from '../branch/branch-list/branch-list.component';
import { CampaignModule } from '../campaign/campaign.module';
import { UpdateMerchantComponent } from './update-merchant/update-merchant.component';
import { BranchModule } from '../branch/branch.module';

@NgModule({
  imports: [
    CommonModule,
    MerchantRoutingModule,
    FormsModule,
    NgbModule,
    BranchModule,
    CampaignModule,
  ],
  declarations: [
    AddMerchantComponent,
    MerchantsListComponent,
    MerchantDetailsComponent,
    CampaignListComponent,
    BranchListComponent,
    UpdateMerchantComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MerchantModule {}
