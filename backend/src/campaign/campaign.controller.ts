import { CampaignService } from './campaign.service';
import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../shared/auth/guards/jwt.guard';
import { SearchCampaignsInput } from './inputs/list-campaigns.dto';

@Controller('campaign')
export class CampaignController {
  constructor(private campaignService: CampaignService) {}

  @UseGuards(JwtAuthGuard)
  @Get('search')
  async listCampaigns(@Query() input: SearchCampaignsInput) {
    return await this.campaignService.listCampaigns(input);
  }
}
