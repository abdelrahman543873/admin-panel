import { EcommerceRepository } from '../../src/ecommerce/ecommerce.repository';

export const ecommerceTestRepo = (): EcommerceRepository =>
  global.ecommerceRepository;
