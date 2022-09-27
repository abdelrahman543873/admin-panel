import { Merchant } from './../../../src/merchant/model/merchant.entity';
import { branchTestRepo } from './../test-repos/branch.test-repo';
import { address, date, name, random, datatype } from 'faker';
import { merchantFactory } from './merchant.factory';
interface BranchType {
  latitude?: number;
  longitude?: number;
  workingHours?: string;
  merchant?: Merchant;
  city?: number;
  brandKey?: string;
  enDistrict?: string;
  arDistrict?: string;
  managerName?: string;
  managerPhoneNumber?: string;
  hasPickup?: boolean;
  isActive?: boolean;
  isDeleted?: boolean;
  address?: string;
  location?: string;
  enName?: string;
  arName?: string;
  enWorkingHours?: string;
  arWorkingHours?: string;
}

export const buildBranchParams = async (
  obj: BranchType = {},
): Promise<BranchType> => {
  return {
    arName: obj.arName || name.title(),
    enName: obj.enName || name.title(),
    longitude: obj.longitude || +address.longitude(),
    latitude: obj.latitude || +address.latitude(),
    merchant: obj.merchant || (await merchantFactory()),
    workingHours: obj.workingHours || random.word(),
    city: obj.city || datatype.number(),
    brandKey: obj.brandKey || random.word(),
    enDistrict: obj.enDistrict || random.word(),
    arDistrict: obj.arDistrict || random.word(),
    managerName: obj.managerName || random.word(),
    managerPhoneNumber: obj.managerPhoneNumber || random.word(),
    hasPickup: obj.hasPickup || false,
    isActive: obj.isActive || false,
    isDeleted: obj.isDeleted || false,
    address: obj.address || random.word(),
    location: obj.location || random.word(),
    enWorkingHours: obj.enWorkingHours || random.word(),
    arWorkingHours: obj.arWorkingHours || random.word(),
  };
};

export const branchFactory = async (obj: BranchType = {}) => {
  const params: BranchType = await buildBranchParams(obj);
  return await branchTestRepo().save({
    ...params,
    merchant: { id: params.merchant.id },
  });
};
