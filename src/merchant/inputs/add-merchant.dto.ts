import { Type } from 'class-transformer';
import { IsEmail, IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { getValuesFromEnum } from '../../shared/utils/columnEnum';
import { POS_TYPE, MERCHANT_CATEGORY } from '../merchant.enum';
import { IsExistingCategory } from '../validators/is-existing-category';
import { IsExistingPos } from '../validators/is-existing-pos.validator';

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

  @IsInt()
  @Type(() => Number)
  @IsExistingPos()
  pos: number;

  @IsInt()
  @Type(() => Number)
  @IsExistingCategory()
  category: number;

  @IsString()
  @IsNotEmpty()
  password: string;
}
