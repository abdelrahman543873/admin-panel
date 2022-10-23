import { Type } from 'class-transformer';
import { IsExistingMerchant } from '../../merchant/validators/is-existing-merchant';
import {
  IsDate,
  IsInt,
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class AddBranchInput {
  @IsExistingMerchant()
  @IsInt()
  @Type(() => Number)
  merchantId: number;

  @IsString()
  @IsNotEmpty()
  arName: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  activationDate?: Date;

  @IsString()
  @IsNotEmpty()
  enName: string;

  @IsLongitude()
  @Type(() => Number)
  longitude: number;

  @IsLatitude()
  @Type(() => Number)
  latitude: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  managerName?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  arDistrict?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  enDistrict?: string;

  //TODO phone validation
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  managerPhoneNumber?: string;
}
