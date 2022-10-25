import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { IsExistingBranch } from '../validators/is-existing-branch';

export class IntegrateBranchDto {
  @IsString()
  @IsNotEmpty()
  brandKey: string;

  @IsExistingBranch()
  @IsInt()
  @Type(() => Number)
  id: number;
}
