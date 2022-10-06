import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { IsExistingMerchant } from '../../merchant/validators/is-existing-merchant';

export class AddCampaignDto {
  @IsExistingMerchant()
  @IsInt()
  @Type(() => Number)
  merchantId: number;

  @IsString()
  @IsNotEmpty()
  enTitle: string;

  @IsString()
  @IsNotEmpty()
  arTitle: string;

  @IsString()
  @IsNotEmpty()
  enDescription: string;

  @IsString()
  @IsNotEmpty()
  arDescription: string;
}
