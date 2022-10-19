import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { IsExistingPos } from '../../pos/validators/is-existing-pos.validator';

export class AddMerchantInput {
  @IsString()
  @IsNotEmpty()
  enName: string;

  //TODO change to phone number validation
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  phoneNumber?: string;

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

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  brandKey?: string;

  @IsExistingPos()
  @IsInt()
  @Type(() => Number)
  pos: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  password: string;
}
