import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';
import { IsExistingBranch } from '../../branch/validators/is-existing-branch';

export class GetMerchantDevicesDto {
  @IsInt()
  @IsExistingBranch()
  @Type(() => Number)
  branch?: number;
}
