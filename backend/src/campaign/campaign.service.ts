import { Injectable } from '@nestjs/common';
import { CampaignRepository } from './campaign.repository';
import { ListCampaignsInput } from './inputs/list-campaigns.dto';

@Injectable()
export class CampaignService {
  constructor(private campaignRepository: CampaignRepository) {}

  listCampaigns(input: ListCampaignsInput) {
    return this.campaignRepository.listCampaigns(input);
  }
}
