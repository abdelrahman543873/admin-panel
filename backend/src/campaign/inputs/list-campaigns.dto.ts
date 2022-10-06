import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class SearchCampaignsInput {
  @IsInt()
  @Type(() => Number)
  merchantId?: number;
}
