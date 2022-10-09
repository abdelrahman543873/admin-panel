import { name, internet } from 'faker';
import { campaignTypeTestRepo } from '../test-repos/campaign-type.repo';
import { CampaignType } from '../../../src/campaign/models/campaign-type.entity';
import { Campaign } from '../../../src/campaign/models/campaign.entity';
import { campaignFactory } from './campaign.factory';
import { campaignImageTestRepo } from '../test-repos/campaign-image-test.repo';
import { CampaignImage } from '../../../src/campaign/models/campaign-image.entity';

interface CampaignImageType {
  id?: Campaign;
  imageUrl?: string;
}

export const buildCampaignImageParams = async (obj: CampaignImageType = {}) => {
  return {
    id: obj.id || (await campaignFactory()),
    imageUrl: obj.imageUrl || internet.url(),
  };
};

export const campaignImageFactory = async (
  obj: CampaignImageType = {},
): Promise<CampaignImage> => {
  const params: CampaignImageType = await buildCampaignImageParams(obj);
  return await campaignImageTestRepo().save({
    ...params,
    id: { id: params.id.id },
  });
};
