import { Injectable } from '@nestjs/common';
import { CampaignRepository } from './campaign.repository';
import { SearchCampaignsInput } from './inputs/list-campaigns.dto';
import { AddCampaignDto } from './inputs/add-campaign.dto';

@Injectable()
export class CampaignService {
  constructor(private campaignRepository: CampaignRepository) {}

  listCampaigns(input: SearchCampaignsInput) {
    return this.campaignRepository.listCampaigns(input);
  }

  addCampaign(input: AddCampaignDto) {
    return this.campaignRepository.addCampaign(input);
  }
}
