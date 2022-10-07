import { Branch } from './../../src/branch/branch.entity';
import { branchFactory } from '../branch/branch.factory';
import { datatype } from 'faker';
import { deviceTestRepo } from './device.test-repo';

interface DeviceType {
  activationCode?: string;
  branch?: Branch;
  branchKey?: string;
  activationStatus?: number;
  token?: string;
  model?: string;
  appVersion?: string;
  os?: string;
  osVersion?: string;
  status?: number;
}

export const buildDeviceParams = async (
  obj: DeviceType = {},
): Promise<DeviceType> => {
  return {
    activationCode: obj.activationCode || datatype.string(45),
    branch: obj.branch || (await branchFactory()),
    branchKey: obj.branchKey || datatype.string(),
    activationStatus: obj.activationStatus || 1,
    token: obj.token || datatype.string(),
    model: obj.model || datatype.string(),
    appVersion: obj.appVersion || datatype.string(45),
    os: obj.os || datatype.string(45),
    osVersion: obj.osVersion || datatype.string(45),
  };
};

export const deviceFactory = async (obj: DeviceType = {}) => {
  const params: DeviceType = await buildDeviceParams(obj);
  return await deviceTestRepo().save({
    ...params,
    branch: { id: params.branch.id },
  });
};
