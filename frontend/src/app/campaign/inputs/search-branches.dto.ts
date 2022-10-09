import { PaginationDto } from '../../shared/classes/pagination.dto';
export interface SearchBranchesDto extends PaginationDto {
  merchantId?: number;
  enTitle?: string;
}
