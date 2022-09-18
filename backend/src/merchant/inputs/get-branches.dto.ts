import { IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class GetBranchesInput {
  @IsInt()
  @Type(() => Number)
  id: number;
}
