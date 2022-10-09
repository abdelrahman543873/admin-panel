import { PaginationDto } from '../../shared/classes/pagination.dto';
export class SearchBranchesDto extends PaginationDto {
  enName?: string;
  merchantId?: number;
}
