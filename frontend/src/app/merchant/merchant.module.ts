import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchantRoutingModule } from './merchant-routing.module';
import { AddMerchantComponent } from './add/add-merchant.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddMerchantComponent],
  imports: [CommonModule, MerchantRoutingModule, FormsModule],
})
export class MerchantModule {}
