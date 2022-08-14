import { MerchantRepository } from '../../../src/merchant/repositories/merchant.repository';

export const merchantTestRepo = (): MerchantRepository =>
  global.merchantRepository;
