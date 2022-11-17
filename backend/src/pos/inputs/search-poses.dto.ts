import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';
import { PaginationDto } from '../../shared/dtos/pagination.dto';
import { booleanTransformer } from '../../shared/utils/boolean-transformer';
export class SearchPossesDto extends PaginationDto {
  @IsOptional()
  @IsBoolean()
  @Transform(booleanTransformer)
  activated?: boolean;
}
