import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from '../shared/abstract/repository.abstract';
import { Device } from './device.entity';
import { AddDeviceInput } from './inputs/add-device.dto';
import { GetDeviceInput } from './inputs/get-device.input';
import { SearchDevicesDto } from './inputs/search-devices.dto';
import { paginate } from 'nestjs-typeorm-paginate';
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
