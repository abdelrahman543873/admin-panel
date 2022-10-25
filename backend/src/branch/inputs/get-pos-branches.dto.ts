import { IsInt } from 'class-validator';
import { Type } from 'class-transformer';
export class GetPosBranches {
  @IsInt()
  @Type(() => Number)
  branchId: number;
}
