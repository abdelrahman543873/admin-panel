import { PaginationDto } from './../shared/dtos/pagination.dto';
import { Injectable } from '@nestjs/common';
import { MerchantCategoryRepository } from './merchant-category.repository';

@Injectable()
export class MerchantCategoryService {
  constructor(
    private readonly merchantCategoryRepository: MerchantCategoryRepository,
  ) {}

  getMerchantCategories(input: PaginationDto) {
    return this.merchantCategoryRepository.getMerchantCategories(input);
  }
}
