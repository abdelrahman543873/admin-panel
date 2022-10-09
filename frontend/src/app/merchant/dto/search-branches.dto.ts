import { PaginationDto } from '../../shared/classes/pagination.dto';
export class SearchBranchesDto extends PaginationDto {
  name?: string;
  merchantId?: number;
}
