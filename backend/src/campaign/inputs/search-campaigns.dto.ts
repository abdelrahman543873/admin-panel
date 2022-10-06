import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SearchCampaignsInput {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  merchantId?: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  enTitle?: string;
}
