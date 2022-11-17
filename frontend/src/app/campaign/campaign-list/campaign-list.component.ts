import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CampaignService } from '../campaign.service';
import { CampaignInterface } from '../interfaces/campaign.interface';
import { AddCampaignComponent } from '../add-campaign/add-campaign.component';
import { dateMapper } from '../../shared/utils/date-mapper.util';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss'],
})
export class CampaignListComponent implements OnInit {
  campaigns!: CampaignInterface[];
  @Input() merchantId!: number;
  paginationLimit: number = 5;
  totalNumberOfCampaigns!: number;
  currentPage = 1;
  constructor(
    private readonly campaignService: CampaignService,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    this.paginate(this.paginationLimit);
  }

  searchCampaignsWithTitle(enTitle: string) {
    this.campaignService
      .searchCampaigns({ enTitle, merchantId: this.merchantId })
      .subscribe((campaigns) => {
        this.campaigns = campaigns.items;
        this.totalNumberOfCampaigns = campaigns.meta.totalItems;
      });
  }

  open() {
    const modalRef = this.modalService.open(AddCampaignComponent, {
      animation: true,
    });
    modalRef.componentInstance.merchantId = this.merchantId;
    modalRef.componentInstance.campaignAdded.subscribe(() => {
      this.paginate(this.paginationLimit);
    });
  }

  paginate(limit: number, offset: number = 1) {
    this.paginationLimit = limit;
    this.campaignService
      .searchCampaigns({ limit, offset, merchantId: this.merchantId })
      .subscribe((data) => {
        this.campaigns = data.items.map(dateMapper);
        this.totalNumberOfCampaigns = data.meta.totalItems;
      });
  }
}
