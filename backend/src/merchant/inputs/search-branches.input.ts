import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class SearchBranchesInput {
  @IsInt()
  @Type(() => Number)
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}
