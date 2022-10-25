import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from '../shared/abstract/repository.abstract';
import { Device } from './device.entity';
import { AddDeviceInput } from './inputs/add-device.dto';
import { GetDeviceInput } from './inputs/get-device.input';
import { SearchDevicesDto } from './inputs/search-devices.dto';
import { paginate } from 'nestjs-typeorm-paginate';
import { GetPosDevices } from './inputs/get-pos-devices';
import { IntegrateDeviceDto } from './inputs/integrate-device.dto';
@Injectable()
export class DeviceRepository extends BaseRepository<Device> {
  constructor(
    @InjectRepository(Device) private readonly device: Repository<Device>,
  ) {
    super(device);
  }

  addDevice(input: AddDeviceInput) {
    return this.device.save({
      activationCode: `${Math.floor(100000 + Math.random() * 900000)}`,
      branch: { id: input.branchId },
    });
  }

  getDevice(input: GetDeviceInput) {
    return this.device.findOne({
      where: { id: input.id },
      relations: ['branch'],
    });
  }

  integrateDeviceDto(input: IntegrateDeviceDto) {
    return this.device.update({ id: input.id }, { ...input });
  }

  getDeviceByBranch(input: GetPosDevices) {
    return this.device.findOne({
      where: { id: input.deviceId },
      relations: { branch: { merchant: { pos: true } } },
    });
  }

  searchDevices(input: SearchDevicesDto) {
    return paginate(
      this.device,
      { limit: input.limit, page: input.offset },
      {
        where: { ...(input.branchId && { branch: { id: input.branchId } }) },
      },
    );
  }
}
