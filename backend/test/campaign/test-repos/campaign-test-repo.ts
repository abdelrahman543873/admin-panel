import { CampaignRepository } from '../../../src/campaign/repositories/campaign.repository';

export const campaignTestRepo = (): CampaignRepository => global.campaignRepository;
