import { Component, Input, OnInit } from '@angular/core';
import { CampaignService } from '../campaign.service';
import { CampaignInterface } from '../interfaces/campaign.interface';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss'],
})
export class CampaignListComponent implements OnInit {
  campaigns!: CampaignInterface[];
  @Input() merchantId!: number;
  existingCampaigns: boolean = true;
  constructor(private readonly campaignService: CampaignService) {}

  ngOnInit(): void {
    this.campaignService
      .searchCampaigns({
        merchantId: this.merchantId,
      })
      .subscribe((campaigns) => {
        this.campaigns = campaigns;
        this.existingCampaigns = true;
      });
  }

  searchCampaignsWithTitle(enTitle: string) {
    this.campaignService.searchCampaigns({ enTitle }).subscribe((campaigns) => {
      if (campaigns.length) this.campaigns = campaigns;
      else this.existingCampaigns = false;
    });
  }
}
