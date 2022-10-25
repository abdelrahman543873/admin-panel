import { IsInt } from 'class-validator';
import { Type } from 'class-transformer';
export class GetPosDevices {
  @IsInt()
  @Type(() => Number)
  deviceId: number;
}
