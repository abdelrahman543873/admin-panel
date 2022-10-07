import { name, internet, datatype, random } from 'faker';
import { merchantFactory } from '../merchant/factories/merchant.factory';
import { campaignTestRepo } from './campaign-test-repo';
import { Merchant } from '../../src/merchant/model/merchant.entity';

interface CampaignType {
  merchant?: Merchant;
  enTitle?: string;
  enDescription?: string;
  arDescription?: string;
  arTitle?: string;
  type?: number;
  logo?: string;
  status?: number;
}

export const buildCampaignParams = async (
  obj: CampaignType = {},
): Promise<CampaignType> => {
  return {
    merchant: obj.merchant || (await merchantFactory()),
    enTitle: obj.enTitle || name.title(),
    arTitle: obj.arTitle || name.title(),
    enDescription: obj.enDescription || random.words(),
    arDescription: obj.arDescription || random.words(),
    type: obj.type || 1,
    logo: obj.logo || internet.url(),
    status: obj.status || 1,
  };
};

export const campaignFactory = async (obj: CampaignType = {}) => {
  const params: CampaignType = await buildCampaignParams(obj);
  return await campaignTestRepo().save({
    ...params,
    merchant: { id: params.merchant.id },
  });
};
