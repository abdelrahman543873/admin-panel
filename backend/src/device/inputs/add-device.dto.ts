import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';
import { IsExistingBranch } from '../../branch/validators/is-existing-branch';

export class AddDeviceInput {
  @IsExistingBranch()
  @IsInt()
  @Type(() => Number)
  branchId: number;
}
