import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { PaginationDto } from '../../shared/dtos/pagination.dto';

export class SearchBranchesInput extends PaginationDto {
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
