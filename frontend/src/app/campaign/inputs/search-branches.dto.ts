import { PaginationDto } from '../../shared/dtos/pagination.dto';
export interface SearchBranchesDto extends PaginationDto {
  merchantId?: number;
  enTitle?: string;
}
