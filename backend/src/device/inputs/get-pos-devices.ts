import { IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { IsExistingDevice } from '../validators/is-existing-device';
export class GetPosDevices {
  @IsExistingDevice()
  @IsInt()
  @Type(() => Number)
  deviceId: number;
}
