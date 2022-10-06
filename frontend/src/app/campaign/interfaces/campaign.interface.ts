import { MerchantModel } from '../../merchant/interfaces/merchant.interface';
export interface CampaignInterface {
  id: string;
  merchant: MerchantModel;
  enTitle: string;
  arTitle: string;
  type: number;
  logo: string;
  status: boolean;
  enDescription: string;
  arDescription: string;
  createdAt: Date;
}
