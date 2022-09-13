import { CampaignRepository } from './campaign.repository';
import { Module } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CampaignController } from './campaign.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campaign } from './model/campaign.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Campaign])],
  providers: [CampaignService, CampaignRepository],
  controllers: [CampaignController],
})
export class CampaignModule {}
