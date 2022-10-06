import { name, internet, datatype } from 'faker';
import { merchantFactory } from '../merchant/factories/merchant.factory';
import { campaignTestRepo } from './campaign-test-repo';
import { Merchant } from '../../src/merchant/model/merchant.entity';

interface CampaignType {
  merchant?: Merchant;
  enTitle?: string;
  arTitle?: string;
  type?: number;
  logo?: string;
  status?: boolean;
}

export const buildCampaignParams = async (
  obj: CampaignType = {},
): Promise<CampaignType> => {
  return {
    merchant: obj.merchant || (await merchantFactory()),
    enTitle: obj.enTitle || name.title(),
    arTitle: obj.arTitle || name.title(),
    type: obj.type || datatype.number(),
    logo: obj.logo || internet.url(),
    status: obj.status || datatype.boolean(),
  };
};

export const campaignFactory = async (obj: CampaignType = {}) => {
  const params: CampaignType = await buildCampaignParams(obj);
  return await campaignTestRepo().save({
    ...params,
    merchant: { id: params.merchant.id },
  });
};
