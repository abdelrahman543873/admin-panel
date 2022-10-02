import { DeviceRepository } from '../../src/device/device.repository';

export const deviceTestRepo = (): DeviceRepository => global.deviceRepository;
