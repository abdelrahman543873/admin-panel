import { DeviceRepository } from '../../../src/merchant/repositories/device.repository';

export const deviceTestRepo = (): DeviceRepository => global.deviceRepository;
