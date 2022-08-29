import { Injectable } from '@nestjs/common';
import { AddMerchantInput } from './inputs/add-merchant.dto';
import { MerchantRepository } from './repositories/merchant.repository';
import { GetMerchantInput } from './inputs/get-merchant.dto';
import { AddBranchInput } from './inputs/add-branch.dto';
import { BranchRepository } from './repositories/branch.repository';
import { GetBranchInput } from './inputs/get-branch.dto';
import { DeviceRepository } from './repositories/device.repository';
import { AddDeviceInput } from './inputs/add-device.dto';
import { GetDeviceInput } from './inputs/get-device.input';

@Injectable()
export class MerchantService {
  constructor(
    private readonly merchantRepository: MerchantRepository,
    private readonly branchRepository: BranchRepository,
    private readonly deviceRepository: DeviceRepository,
  ) {}
  addMerchant(input: AddMerchantInput, logo: Express.Multer.File) {
    return this.merchantRepository.addMerchant(input, logo);
  }

  addBranch(input: AddBranchInput) {
    return this.branchRepository.addBranch(input);
  }

  addDevice(input: AddDeviceInput) {
    return this.deviceRepository.addDevice(input);
  }

  getDevice(input: GetDeviceInput) {
    return this.deviceRepository.getDevice(input);
  }

  getDevices() {
    return this.deviceRepository.getDevices();
  }

  getBranch(input: GetBranchInput) {
    return this.branchRepository.getBranch(input);
  }

  getBranches() {
    return this.branchRepository.getBranches();
  }

  getMerchant(input: GetMerchantInput) {
    return this.merchantRepository.getMerchant(input);
  }

  getMerchants() {
    return this.merchantRepository.getMerchants();
  }
}
