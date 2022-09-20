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
import { GetMerchantDevicesDto } from './inputs/get-merchant-devices.dto';
import { GetBranchesInput } from './inputs/get-branches.dto';
import { SearchBranchesInput } from './inputs/search-branches.input';

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

  getDevices(input: GetMerchantDevicesDto) {
    return this.deviceRepository.getDevices(input);
  }

  getBranch(input: GetBranchInput) {
    return this.branchRepository.getBranch(input);
  }

  getBranches(input: GetBranchesInput) {
    return this.branchRepository.getBranches(input);
  }

  searchBranches(input: SearchBranchesInput) {
    return this.branchRepository.searchBranches(input);
  }

  getMerchant(input: GetMerchantInput) {
    return this.merchantRepository.getMerchant(input);
  }

  getMerchants() {
    return this.merchantRepository.getMerchants();
  }
}
