import { CampaignService } from './campaign.service';
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../shared/auth/guards/jwt.guard';
import { ListCampaignsInput } from './inputs/list-campaigns.dto';

@Controller('campaign')
export class CampaignController {
  constructor(private campaignService: CampaignService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':merchantId')
  async listCampaigns(@Param() input: ListCampaignsInput) {
    return await this.campaignService.listCampaigns(input);
  }
}
