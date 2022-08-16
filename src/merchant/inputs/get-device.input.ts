import { IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class GetDeviceInput {
  @IsInt()
  @Type(() => Number)
  id: number;
}
