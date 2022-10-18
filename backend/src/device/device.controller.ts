import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AddDeviceInput } from './inputs/add-device.dto';
import { GetDeviceInput } from './inputs/get-device.input';
import { DeviceService } from './device.service';
import { SearchDevicesDto } from './inputs/search-devices.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Device')
@Controller('device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}
  @Post()
  async addDevice(@Body() input: AddDeviceInput) {
    return this.deviceService.addDevice(input);
  }

  @Get('search')
  async searchDevices(@Query() input: SearchDevicesDto) {
    return this.deviceService.searchDevices(input);
  }

  @Get(':id')
  async getDevice(@Param() input: GetDeviceInput) {
    return this.deviceService.getDevice(input);
  }
}
