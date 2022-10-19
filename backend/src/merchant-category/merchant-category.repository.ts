import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from '../shared/abstract/repository.abstract';
import { MerchantCategory } from './merchant-category.entity';
import { paginate } from 'nestjs-typeorm-paginate';
import { PaginationDto } from '../shared/dtos/pagination.dto';
@Injectable()
export class MerchantCategoryRepository extends BaseRepository<MerchantCategory> {
  constructor(
    @InjectRepository(MerchantCategory)
    private readonly category: Repository<MerchantCategory>,
  ) {
    super(category);
  }

  findCategoryById(id: number) {
    return this.category.findOne({ where: { id } });
  }

  getMerchantCategories(input: PaginationDto) {
    return paginate<MerchantCategory>(this.category, {
      limit: input.limit,
      page: input.offset,
    });
  }
}
