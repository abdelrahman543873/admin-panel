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
import { BranchModule } from '../branch/branch.module';
import { CampaignModule } from '../campaign/campaign.module';
import { ToastsContainer } from '../shared/components/toast/toast-container.component';

@NgModule({
  declarations: [
    AddMerchantComponent,
    MerchantsListComponent,
    MerchantDetailsComponent,
    CampaignListComponent,
    BranchListComponent,
    ToastsContainer,
  ],
  imports: [
    CommonModule,
    MerchantRoutingModule,
    FormsModule,
    NgbModule,
    BranchModule,
    CampaignModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MerchantModule {}
