import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IsExistingBranch } from '../validators/is-existing-branch';

export class IntegrateBranchDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  brandKey?: string;

  @IsExistingBranch()
  @Type(() => Number)
  @IsInt()
  id: number;
}
