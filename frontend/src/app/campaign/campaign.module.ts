import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddCampaignComponent } from './add-campaign/add-campaign.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AddCampaignComponent, CampaignListComponent],
  imports: [CommonModule, FormsModule, NgbModule],
  exports: [CampaignListComponent],
})
export class CampaignModule {}
