import { MerchantModel } from '../../merchant/interfaces/merchant.interface';
export interface BranchInterface {
  id: number;
  latitude: number;
  longitude: number;
  workingHours: string;
  merchant: MerchantModel;
  city: number;
  brandKey: string;
  enDistrict: string;
  arDistrict: string;
  managerName: string;
  managerPhoneNumber: string;
  createdAt: Date;
  hasPickup: boolean;
  isActive: boolean;
  isDeleted: boolean;
  address: string;
  location: string;
  updatedAt: Date;
  enName: string;
  arName: string;
  enWorkingHours: Record<any, any>;
  arWorkingHours: Record<any, any>;
}
