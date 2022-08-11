import { Injectable } from '@nestjs/common';
import { AddMerchantInput } from './inputs/add-merchant.dto';
import { MerchantRepository } from './repositories/merchant.repository';
import { GetMerchantInput } from './inputs/get-merchant.dto';

@Injectable()
export class MerchantService {
  constructor(private readonly merchantRepository: MerchantRepository) {}
  addMerchant(input: AddMerchantInput) {
    return this.merchantRepository.addMerchant(input);
  }

  getMerchant(input: GetMerchantInput) {
    return this.merchantRepository.getMerchant(input);
  }

  getMerchants() {
    return this.merchantRepository.getMerchants();
  }
}
