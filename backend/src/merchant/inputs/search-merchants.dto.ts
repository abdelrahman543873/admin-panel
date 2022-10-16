import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PaginationDto } from '../../shared/dtos/pagination.dto';

export class SearchMerchantsDto extends PaginationDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  enName?: string;
}
