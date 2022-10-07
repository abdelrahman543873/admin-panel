import { CampaignService } from './campaign.service';
import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../shared/auth/guards/jwt.guard';
import { SearchCampaignsInput } from './inputs/search-campaigns.dto';
import { AddCampaignDto } from './inputs/add-campaign.dto';

@Controller('campaign')
export class CampaignController {
  constructor(private campaignService: CampaignService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async addCampaign(@Body() input: AddCampaignDto) {
    return await this.campaignService.addCampaign(input);
  }

  @UseGuards(JwtAuthGuard)
  @Get('search')
  async searchCampaigns(@Query() input: SearchCampaignsInput) {
    return await this.campaignService.listCampaigns(input);
  }
}
