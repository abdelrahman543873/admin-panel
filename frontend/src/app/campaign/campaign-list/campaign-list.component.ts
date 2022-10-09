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
  paginationLimit: number = 5;
  totalNumberOfCampaigns!: number;
  currentPage = 1;
  constructor(private readonly campaignService: CampaignService) {}

  ngOnInit(): void {
    this.paginate(this.paginationLimit);
  }

  searchCampaignsWithTitle(enTitle: string) {
    this.campaignService
      .searchCampaigns({ enTitle, merchantId: this.merchantId })
      .subscribe((campaigns) => {
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
        this.totalNumberOfCampaigns = data.meta.itemCount;
      });
  }
}
