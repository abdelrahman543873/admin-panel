import { MerchantModel } from '../../merchant/interfaces/merchant.interface';
import { CampaignType } from './campaign-type.interface';
import { CampaignImageInterface } from './campaign-image.interface';
export interface CampaignInterface {
  id: string;
  merchant: MerchantModel;
  enTitle: string;
  arTitle: string;
  type: CampaignType;
  image: CampaignImageInterface;
  status: boolean;
  enDescription: string;
  arDescription: string;
  createdAt: string;
}
