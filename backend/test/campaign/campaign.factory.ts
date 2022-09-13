import { name, internet, datatype } from 'faker';
import { merchantFactory } from '../merchant/factories/merchant.factory';
import { campaignTestRepo } from './campaign-test-repo';
import { Merchant } from '../../src/merchant/model/merchant.entity';

interface CampaignType {
  idMerchant?: Merchant;
  title?: string;
  title_ar?: string;
  idCampaignType?: number;
  logo?: string;
  idCampaignStatus?: number;
}

export const buildCampaignParams = async (
  obj: CampaignType = {},
): Promise<CampaignType> => {
  return {
    idMerchant: obj.idMerchant || (await merchantFactory()),
    title: obj.title || name.title(),
    title_ar: obj.title || name.title(),
    idCampaignType: obj.idCampaignType || datatype.number(),
    logo: obj.logo || internet.url(),
    idCampaignStatus: obj.idCampaignStatus || datatype.number(),
  };
};

export const campaignFactory = async (obj: CampaignType = {}) => {
  const params: CampaignType = await buildCampaignParams(obj);
  return await campaignTestRepo().save({ ...params });
};
