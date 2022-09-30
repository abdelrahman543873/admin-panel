import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from '../../shared/abstract/repository.abstract';
import { Device } from '../model/device.entity';
import { AddDeviceInput } from '../inputs/add-device.dto';
import { GetDeviceInput } from '../inputs/get-device.input';
import { GetMerchantDevicesDto } from '../inputs/get-merchant-devices.dto';
@Injectable()
export class DeviceRepository extends BaseRepository<Device> {
  constructor(
    @InjectRepository(Device) private readonly device: Repository<Device>,
  ) {
    super(device);
  }

  addDevice(input: AddDeviceInput) {
    return this.device.save({
      activationCode: Math.floor(100000 + Math.random() * 900000),
      branch: input.branch,
    });
  }

  getDevice(input: GetDeviceInput) {
    return this.device.findOne({
      where: { id: input.id },
      relations: ['branch'],
    });
  }

  getDevices(input: GetMerchantDevicesDto) {
    return this.device.find({ where: { branch: input.branch } });
  }
}
