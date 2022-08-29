import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
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

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'string', format: 'binary' })
  logo: string;

  @IsExistingPos()
  @IsInt()
  @Type(() => Number)
  pos: number;

  @IsExistingCategory()
  @IsInt()
  @Type(() => Number)
  category: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  password: string;
}
