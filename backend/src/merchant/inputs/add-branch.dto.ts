import { Type } from 'class-transformer';
import {
  IsDate,
  IsInt,
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { IsExistingMerchant } from '../validators/is-existing-merchant';

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
