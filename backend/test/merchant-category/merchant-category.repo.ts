import { MerchantCategoryRepository } from '../../src/merchant-category/merchant-category.repository';

export const merchantCategoryTestRepo = (): MerchantCategoryRepository =>
  global.merchantCategoryRepository;
