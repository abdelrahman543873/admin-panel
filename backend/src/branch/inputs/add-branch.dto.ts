import { Type } from 'class-transformer';
import { IsExistingMerchant } from '../../merchant/validators/is-existing-merchant';
import {
  IsInt,
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class AddBranchInput {
  @IsExistingMerchant()
  @IsInt()
  @Type(() => Number)
  merchant: number;

  @IsString()
  @IsNotEmpty()
  arName: string;

  @IsString()
  @IsNotEmpty()
  enName: string;

  @IsLongitude()
  @Type(() => Number)
  longitude: number;

  @IsLatitude()
  @Type(() => Number)
  latitude: number;
}
