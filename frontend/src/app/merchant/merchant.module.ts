import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchantRoutingModule } from './merchant-routing.module';
import { AddMerchantComponent } from './add/add-merchant.component';
import { FormsModule } from '@angular/forms';
import { MerchantsListComponent } from './merchants-list/merchants-list.component';
import { MerchantDetailsComponent } from './merchant-details/merchant-details.component';
import { AddBranchModalComponent } from './add-branch-modal/add-branch-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AddMerchantComponent,
    MerchantsListComponent,
    MerchantDetailsComponent,
    AddBranchModalComponent,
  ],
  imports: [CommonModule, MerchantRoutingModule, FormsModule],
})
export class MerchantModule {}
