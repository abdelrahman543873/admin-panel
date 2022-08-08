import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { getValuesFromEnum } from '../../shared/utils/columnEnum';
import { POS_TYPE, MERCHANT_CATEGORY } from '../merchant.enum';

export class AddMerchantInput {
  @IsString()
  @IsNotEmpty()
  arName: string;

  @IsString()
  @IsNotEmpty()
  enName: string;

  @IsString()
  @IsNotEmpty()
  enSlogan: string;

  @IsString()
  @IsNotEmpty()
  arSlogan: string;

  @IsEmail()
  accountEmail: string;

  @IsString()
  @IsNotEmpty()
  brandKey: string;

  @IsString()
  @IsNotEmpty()
  logo: string;

  @IsEnum(getValuesFromEnum(POS_TYPE))
  posType: string;

  @IsEnum(getValuesFromEnum(MERCHANT_CATEGORY))
  category: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
