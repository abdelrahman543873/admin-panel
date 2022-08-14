import { branchTestRepo } from './../test-repos/branch.test-repo';
import { address, date, name } from 'faker';
import { merchantFactory } from './merchant.factory';
import * as moment from 'moment';
interface BranchType {
  arName?: string;
  enName?: string;
  activationDate?: string;
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
    activationDate: obj.activationDate || moment().day(1).format('YYYY/MM/DD'),
    long: obj.long || +address.longitude(),
    lat: obj.lat || +address.latitude(),
    merchant: obj.merchant || (await merchantFactory()).id,
  };
};

export const branchFactory = async (obj: BranchType = {}) => {
  const params: BranchType = await buildBranchParams(obj);
  return await branchTestRepo().save({ ...params });
};
