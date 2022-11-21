import { PaginationDto } from '../../shared/dtos/pagination.dto';
export class SearchBranchesDto extends PaginationDto {
  enName?: string;
  merchantId?: number;
}
