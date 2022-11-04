import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class IntegrateDeviceDto {
  @IsString()
  @IsNotEmpty()
  integrationId: string;

  @IsString()
  @IsNotEmpty()
  posDeviceName: string;

  @IsInt()
  @Type(() => Number)
  id: number;
}