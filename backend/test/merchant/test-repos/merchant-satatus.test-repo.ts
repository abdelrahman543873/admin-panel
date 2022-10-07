import { MerchantStatusRepository } from '../../../src/merchant/repositories/merchant-status.repository';

export const merchantStatusTestRepo = (): MerchantStatusRepository =>
  global.merchantStatusRepository;
