import { IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class GetBranchInput {
  @IsInt()
  @Type(() => Number)
  id: number;
}
