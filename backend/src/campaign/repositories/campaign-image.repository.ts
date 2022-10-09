import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from '../../shared/abstract/repository.abstract';
import { CampaignImage } from '../models/campaign-image.entity';
@Injectable()
export class CampaignImageRepository extends BaseRepository<CampaignImage> {
  constructor(
    @InjectRepository(CampaignImage)
    private readonly campaignImage: Repository<CampaignImage>,
  ) {
    super(campaignImage);
  }
}
