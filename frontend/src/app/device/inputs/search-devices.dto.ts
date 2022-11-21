import { PaginationDto } from '../../shared/dtos/pagination.dto';
export class SearchDevicesDto extends PaginationDto {
  branchId?: number;
}
