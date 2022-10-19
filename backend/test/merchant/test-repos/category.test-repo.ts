import { CategoryRepository } from '../../../src/merchant-category/category.repository';

export const categoryTestRepo = (): CategoryRepository =>
  global.categoryRepository;
