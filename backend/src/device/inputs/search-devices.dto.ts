import { PaginationDto } from './../../shared/dtos/pagination.dto';
import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';
import { IsExistingBranch } from '../../branch/validators/is-existing-branch';

export class SearchDevicesDto extends PaginationDto {
  @IsExistingBranch()
  @IsInt()
  @Type(() => Number)
  branchId?: number;
}
