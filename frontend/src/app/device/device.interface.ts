import { BranchInterface } from '../branch/intefaces/branch.interface';
export interface DeviceInterface {
  id: number;
  activationCode: string;
  branch: BranchInterface;
  integrationId: string;
  activationStatus: number;
  posDeviceName?: string;
  token: string;
  model: string;
  appVersion: string;
  os: string;
  osVersion: string;
  createdAt: Date;
  updatedAt: Date;
}
