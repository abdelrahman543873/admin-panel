import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from '../../shared/abstract/repository.abstract';
import { Device } from '../model/device.entity';
import { AddDeviceInput } from '../inputs/add-device.dto';
@Injectable()
export class DeviceRepository extends BaseRepository<Device> {
  constructor(
    @InjectRepository(Device) private readonly device: Repository<Device>,
  ) {
    super(device);
  }

  addDevice(input: AddDeviceInput) {
    return this.device.create({
      activationCode: Math.floor(100000 + Math.random() * 900000),
      branch: input.branch,
    });
  }
}
