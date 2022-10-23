import { PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';
import { AddMerchantInput } from './add-merchant.dto';

export class UpdateMerchantDto extends PartialType(AddMerchantInput) {
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  id: number;
}
