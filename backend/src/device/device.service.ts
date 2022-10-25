import { Injectable } from '@nestjs/common';
import { DeviceRepository } from './device.repository';
import { AddDeviceInput } from './inputs/add-device.dto';
import { GetDeviceInput } from './inputs/get-device.input';
import { SearchDevicesDto } from './inputs/search-devices.dto';
import { GetPosDevices } from './inputs/get-pos-devices';
import { IntegrationService } from '../shared/integration/integration.service';
import { ApplicationException } from '../shared/error/application.exception';
import { IntegrateDeviceDto } from './inputs/integrate-device.dto';

@Injectable()
export class DeviceService {
  constructor(
    private readonly deviceRepository: DeviceRepository,
    private integrationService: IntegrationService,
  ) {}

  addDevice(input: AddDeviceInput) {
    return this.deviceRepository.addDevice(input);
  }

  getDevice(input: GetDeviceInput) {
    return this.deviceRepository.getDevice(input);
  }

  integrateDevice(input: IntegrateDeviceDto) {
    return this.deviceRepository.integrateDeviceDto(input);
  }

  async getPosDevices(input: GetPosDevices) {
    const device = await this.deviceRepository.getDeviceByBranch({
      deviceId: input.deviceId,
    });
    const brandKey = device?.branch?.merchant?.brandKey;
    if (!brandKey) throw new ApplicationException(605);
    const devicesData = await this.integrationService.fetchBranchBrandKeys({
      brandKey,
      pos: device.branch.merchant.pos.title,
      resourceType: 'device',
    });
    return devicesData;
  }

  searchDevices(input: SearchDevicesDto) {
    return this.deviceRepository.searchDevices(input);
  }
}
