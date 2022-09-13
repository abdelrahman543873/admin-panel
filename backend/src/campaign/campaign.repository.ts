import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campaign } from './model/campaign.entity';
import { BaseRepository } from '../shared/abstract/repository.abstract';
import { ListCampaignsInput } from './inputs/list-campaigns.dto';

@Injectable()
export class CampaignRepository extends BaseRepository<Campaign> {
  constructor(
    @InjectRepository(Campaign) private readonly campaign: Repository<Campaign>,
  ) {
    super(campaign);
  }

  listCampaigns(input: ListCampaignsInput) {
    return this.campaign.find({
      where: { idMerchant: { id: input.merchantId } },
      relations: ['idMerchant'],
    });
  }
}
