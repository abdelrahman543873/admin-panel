import { CategoryRepository } from '../../../src/merchant-category/merchant-category.repository';

export const categoryTestRepo = (): CategoryRepository =>
  global.categoryRepository;
