import { Type } from 'class-transformer';
import {
  IsDateString,
  IsInt,
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { IsExistingMerchant } from '../validators/is-existing-merchant';

export class AddBranchInput {
  @IsInt()
  @IsExistingMerchant()
  @Type(() => Number)
  merchant: number;

  @IsString()
  @IsNotEmpty()
  arName: string;

  @IsString()
  @IsNotEmpty()
  enName: string;

  @IsDateString()
  activationDate: string;

  @IsLongitude()
  @Type(() => Number)
  long: number;

  @IsLatitude()
  @Type(() => Number)
  lat: number;
}
