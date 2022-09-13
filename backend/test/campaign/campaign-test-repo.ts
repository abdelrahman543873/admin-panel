import { CampaignRepository } from '../../src/campaign/campaign.repository';

export const campaignTestRepo = (): CampaignRepository => global.campaignRepository;
