import { PaginationDto } from './../shared/dtos/pagination.dto';
import { Controller, Get, Query } from '@nestjs/common';
import { MerchantCategoryService } from './merchant-category.service';

@Controller('merchant-category')
export class MerchantCategoryController {
  constructor(
    private readonly merchantCategoryService: MerchantCategoryService,
  ) {}

  @Get()
  async getMerchantCategories(@Query() input: PaginationDto) {
    return await this.merchantCategoryService.getMerchantCategories(input);
  }
}
