import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class ListCampaignsInput {
  @IsInt()
  @Type(() => Number)
  merchantId?: number;
}
