import { PosModel } from './pos.interface';
export interface MerchantModel {
  id: string;
  enName: string;
  arName: string;
  enDescription: string;
  arDescription: string;
  email: string;
  brandKey: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  subscriptionStatus: string;
  integrationId: string;
  pos: PosModel;
  ecommerceType?: number;
  category: {
    id: number;
    name: string;
  };
}
