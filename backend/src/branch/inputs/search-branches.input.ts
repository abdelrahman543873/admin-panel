import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class SearchBranchesInput {
  // TODO add merchant existence validation
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  merchantId?: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  enName?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  arName?: string;
}
