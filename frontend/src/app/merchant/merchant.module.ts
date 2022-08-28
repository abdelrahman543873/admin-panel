import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { MerchantRoutingModule } from './merchant-routing.module';

@NgModule({
  declarations: [AddComponent],
  imports: [CommonModule, MerchantRoutingModule],
})
export class MerchantModule {}
