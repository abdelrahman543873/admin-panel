import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Campaign } from '../models/campaign.entity';
import { BaseRepository } from '../../shared/abstract/repository.abstract';
import { SearchCampaignsInput } from '../inputs/search-campaigns.dto';
import { AddCampaignDto } from '../inputs/add-campaign.dto';
import { paginate } from 'nestjs-typeorm-paginate';

@Injectable()
export class CampaignRepository extends BaseRepository<Campaign> {
  constructor(
    @InjectRepository(Campaign) private readonly campaign: Repository<Campaign>,
  ) {
    super(campaign);
  }

  async listCampaigns(input: SearchCampaignsInput) {
    return await paginate<Campaign>(
      this.campaign,
      { limit: input.limit, page: input.offset },
      {
        where: {
          ...(input.merchantId && { merchant: { id: input.merchantId } }),
          ...(input.enTitle && { enTitle: ILike(`%${input.enTitle}%`) }),
        },
        relations: ['merchant'],
      },
    );
  }

  addCampaign(input: AddCampaignDto) {
    return this.campaign.save({
      ...input,
      merchant: { id: input.merchantId },
      type: { id: 1 },
    });
  }
}
