import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from '../../shared/abstract/repository.abstract';
import { CampaignType } from '../models/campaign-type.entity';
@Injectable()
export class CampaignTypeRepository extends BaseRepository<CampaignType> {
  constructor(
    @InjectRepository(CampaignType)
    private readonly campaignType: Repository<CampaignType>,
  ) {
    super(campaignType);
  }
}
