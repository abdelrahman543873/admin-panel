import { branchFactory } from './branch.factory';
import { datatype } from 'faker';
import { deviceTestRepo } from '../test-repos/device.test-repo';
interface DeviceType {
  activationCode?: number;
  branch?: number;
}

export const buildDeviceParams = async (
  obj: DeviceType = {},
): Promise<DeviceType> => {
  return {
    activationCode: obj.activationCode || datatype.number(),
    branch: obj.branch || (await branchFactory()).id,
  };
};

export const deviceFactory = async (obj: DeviceType = {}) => {
  const params: DeviceType = await buildDeviceParams(obj);
  return await deviceTestRepo().save({ ...params });
};
