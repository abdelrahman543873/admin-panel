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
  enName: string;

  @IsString()
  @IsNotEmpty()
  arName: string;

  @IsString()
  @IsNotEmpty()
  enDescription: string;

  @IsString()
  @IsNotEmpty()
  arDescription: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  brandKey: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'string', format: 'binary' })
  imageUrl: string;

  @IsExistingPos()
  @IsInt()
  @Type(() => Number)
  pos: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  password: string;
}
