import { Injectable } from '@nestjs/common';
import { AddMerchantInput } from './inputs/add-merchant.dto';
import { MerchantRepository } from './repositories/merchant.repository';
import { GetMerchantInput } from './inputs/get-merchant.dto';
import { DeviceRepository } from './repositories/device.repository';
import { AddDeviceInput } from './inputs/add-device.dto';
import { GetDeviceInput } from './inputs/get-device.input';
import { GetMerchantDevicesDto } from './inputs/get-merchant-devices.dto';

@Injectable()
export class MerchantService {
  constructor(
    private readonly merchantRepository: MerchantRepository,
    private readonly deviceRepository: DeviceRepository,
  ) {}
  addMerchant(input: AddMerchantInput, logo: Express.Multer.File) {
    return this.merchantRepository.addMerchant(input, logo);
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

  getMerchant(input: GetMerchantInput) {
    return this.merchantRepository.getMerchant(input);
  }

  getMerchants() {
    return this.merchantRepository.getMerchants();
  }
}
