import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from '../../shared/abstract/repository.abstract';
import { Category } from '../model/category.entity';
@Injectable()
export class CategoryRepository extends BaseRepository<Category> {
  constructor(
    @InjectRepository(Category) private readonly category: Repository<Category>,
  ) {
    super(category);
  }

  findCategoryById(id: number) {
    return this.category.findOne({ where: { id } });
  }
}
