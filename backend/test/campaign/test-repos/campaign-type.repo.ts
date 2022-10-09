import { CampaignTypeRepository } from '../../../src/campaign/repositories/campaign-type.repository';

export const campaignTypeTestRepo = (): CampaignTypeRepository =>
  global.campaignTypeRepository;
