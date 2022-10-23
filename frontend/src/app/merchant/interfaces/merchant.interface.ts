import { PosModel } from './pos.interface';
import { Ecommerce } from '../../ecommerce/commerce.interface';
export interface MerchantModel {
  id: string;
  enName: string;
  arName: string;
  enDescription: string;
  arDescription: string;
  email: string;
  brandKey: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
  subscriptionStatus: string;
  integrationId: string;
  pos?: PosModel;
  phoneNumber?: string;
  password: string;
  ecommerceType?: Ecommerce | null;
  category: {
    id: number;
    enTitle: string;
    arTitle: string;
    enDescription: string;
    arDescription: string;
    logo: string;
  };
}
