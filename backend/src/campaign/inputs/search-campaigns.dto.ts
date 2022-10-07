import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PaginationDto } from '../../shared/dtos/pagination.dto';
export class SearchCampaignsInput extends PaginationDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  merchantId?: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  enTitle?: string;
}
