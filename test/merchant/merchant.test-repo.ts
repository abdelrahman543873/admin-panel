import { MerchantRepository } from '../../src/merchant/merchant.repository';

export const merchantTestRepo = (): MerchantRepository =>
  global.merchantRepository;
