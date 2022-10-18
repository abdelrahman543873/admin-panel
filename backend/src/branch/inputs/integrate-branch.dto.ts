import { Transform, TransformFnParams, Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';
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

  @IsOptional()
  @Transform((params: TransformFnParams) => {
    return params.value - 1;
  })
  @Type(() => Number)
  @Min(0)
  @IsInt()
  posBranch?: number;
}
