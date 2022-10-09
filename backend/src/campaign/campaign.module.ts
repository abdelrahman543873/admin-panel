import { CampaignRepository } from './repositories/campaign.repository';
import { Module } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CampaignController } from './campaign.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campaign } from './models/campaign.entity';
import { CampaignType } from './models/campaign-type.entity';
import { CampaignTypeRepository } from './repositories/campaign-type.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Campaign, CampaignType])],
  providers: [CampaignService, CampaignRepository, CampaignTypeRepository],
  controllers: [CampaignController],
})
export class CampaignModule {}
