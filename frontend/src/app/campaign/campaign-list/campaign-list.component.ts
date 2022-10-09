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
  paginationLimit!: number;
  totalNumberOfCampaigns!: number;
  currentPage = 1;
  constructor(private readonly campaignService: CampaignService) {}

  ngOnInit(): void {
    this.campaignService
      .searchCampaigns({
        merchantId: this.merchantId,
      })
      .subscribe((campaigns) => {
        this.campaigns = campaigns.items;
        this.existingCampaigns = true;
        this.totalNumberOfCampaigns = campaigns.meta.itemCount;
      });
  }

  searchCampaignsWithTitle(enTitle: string) {
    this.campaignService.searchCampaigns({ enTitle }).subscribe((campaigns) => {
      if (campaigns.items.length) this.campaigns = campaigns.items;
      else this.existingCampaigns = false;
    });
  }

  paginate(limit: number, offset: number = 1) {
    this.paginationLimit = limit;
    this.campaignService
      .searchCampaigns({ limit, offset, merchantId: this.merchantId })
      .subscribe((data) => {
        this.campaigns = data.items;
      });
  }
}
