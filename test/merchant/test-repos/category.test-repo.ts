import { CategoryRepository } from '../../../src/merchant/repositories/category.repository';

export const categoryTestRepo = (): CategoryRepository =>
  global.categoryRepository;
