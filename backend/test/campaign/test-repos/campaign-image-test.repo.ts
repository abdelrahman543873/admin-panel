import { CampaignImageRepository } from '../../../src/campaign/repositories/campaign-image.repository';

export const campaignImageTestRepo = (): CampaignImageRepository =>
  global.campaignImageRepository;
