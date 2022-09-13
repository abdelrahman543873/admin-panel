import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class GetMerchantDevicesDto {
  @IsInt()
  @Type(() => Number)
  branch?: number;
}
