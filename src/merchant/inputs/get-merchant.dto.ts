import { IsInt, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class GetMerchantInput {
  @IsInt()
  @Type(() => Number)
  id: number;
}
