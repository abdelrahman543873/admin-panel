import { DeviceRepository } from './device.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviceController } from './device.controller';
import { Device } from './device.entity';
import { DeviceService } from './device.service';
import { IntegrationModule } from '../shared/integration/integration.module';
import { ExistingDeviceConstraint } from './validators/is-existing-device';

@Module({
  imports: [TypeOrmModule.forFeature([Device]), IntegrationModule],
  controllers: [DeviceController],
  providers: [DeviceService, DeviceRepository, ExistingDeviceConstraint],
})
export class DeviceModule {}
