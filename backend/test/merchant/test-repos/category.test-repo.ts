import { CategoryRepository } from '../../../src/category/category.repository';

export const categoryTestRepo = (): CategoryRepository =>
  global.categoryRepository;
