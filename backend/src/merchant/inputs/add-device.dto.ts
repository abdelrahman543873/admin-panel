import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';
import { IsExistingBranch } from '../validators/is-existing-branch';

export class AddDeviceInput {
  @IsInt()
  @IsExistingBranch()
  @Type(() => Number)
  branch: number;
}
