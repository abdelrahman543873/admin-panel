import { MerchantCategoryRepository } from '../../src/merchant-category/category.repository';

export const merchantCategoryTestRepo = (): MerchantCategoryRepository =>
  global.merchantCategoryRepository;
