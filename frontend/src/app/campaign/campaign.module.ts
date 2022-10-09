import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddCampaignComponent } from './add-campaign/add-campaign.component';

@NgModule({
  declarations: [AddCampaignComponent],
  imports: [CommonModule, FormsModule],
})
export class CampaignModule {}
