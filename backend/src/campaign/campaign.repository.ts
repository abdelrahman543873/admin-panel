import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campaign } from './model/campaign.entity';
import { BaseRepository } from '../shared/abstract/repository.abstract';
import { SearchCampaignsInput } from './inputs/list-campaigns.dto';
import { AddCampaignDto } from './inputs/add-campaign.dto';

@Injectable()
export class CampaignRepository extends BaseRepository<Campaign> {
  constructor(
    @InjectRepository(Campaign) private readonly campaign: Repository<Campaign>,
  ) {
    super(campaign);
  }

  listCampaigns(input: SearchCampaignsInput) {
    return this.campaign.find({
      where: {
        ...(input.merchantId && { merchant: { id: input.merchantId } }),
      },
      relations: ['merchant'],
    });
  }

  addCampaign(input: AddCampaignDto) {
    return this.campaign.create({
      ...input,
      merchant: { id: input.merchantId },
    });
  }
}
