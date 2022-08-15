import { branchTestRepo } from './../test-repos/branch.test-repo';
import { address, date, name } from 'faker';
import { merchantFactory } from './merchant.factory';
interface BranchType {
  arName?: string;
  enName?: string;
  activationDate?: Date;
  long?: number;
  lat?: number;
  merchant?: number;
}

export const buildBranchParams = async (
  obj: BranchType = {},
): Promise<BranchType> => {
  return {
    arName: obj.arName || name.title(),
    enName: obj.enName || name.title(),
    activationDate: obj.activationDate || date.future(),
    long: obj.long || +address.longitude(),
    lat: obj.lat || +address.latitude(),
    merchant: obj.merchant || (await merchantFactory()).id,
  };
};

export const branchFactory = async (obj: BranchType = {}) => {
  const params: BranchType = await buildBranchParams(obj);
  return await branchTestRepo().save({ ...params });
};