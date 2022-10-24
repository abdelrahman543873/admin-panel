import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CampaignService } from '../campaign.service';
import { AddCampaignDto } from '../inputs/add-campaigns.dto';

@Component({
  selector: 'app-add-campaign',
  templateUrl: './add-campaign.component.html',
  styleUrls: ['./add-campaign.component.scss'],
})
export class AddCampaignComponent implements OnInit {
  @Input() merchantId!: number;
  @Output() campaignAdded = new EventEmitter();
  constructor(
    public activeModal: NgbActiveModal,
    private readonly campaignService: CampaignService,
  ) {}

  ngOnInit(): void {}

  addCampaign(campaignDto: AddCampaignDto) {
    this.campaignService
      .addCampaign({
        ...campaignDto,
        merchantId: this.merchantId,
      })
      .subscribe((campaign) => {
        if (campaign.id) this.campaignAdded.emit();
      });
    this.activeModal.close('Save click');
  }
}
