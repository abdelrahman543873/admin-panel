import { Injectable } from '@nestjs/common';
import { DeviceRepository } from './device.repository';
import { AddDeviceInput } from './inputs/add-device.dto';
import { GetDeviceInput } from './inputs/get-device.input';
import { SearchDevicesDto } from './inputs/search-devices.dto';

@Injectable()
export class DeviceService {
  constructor(private readonly deviceRepository: DeviceRepository) {}

  addDevice(input: AddDeviceInput) {
    return this.deviceRepository.addDevice(input);
  }

  getDevice(input: GetDeviceInput) {
    return this.deviceRepository.getDevice(input);
  }

  searchDevices(input: SearchDevicesDto) {
    return this.deviceRepository.searchDevices(input);
  }
}
