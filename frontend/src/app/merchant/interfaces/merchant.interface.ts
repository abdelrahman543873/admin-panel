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
  integrationId: string;
  pos: PosModel;
  category: {
    id: number;
    name: string;
  };
}
