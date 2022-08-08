import { Injectable } from '@nestjs/common';
import { AddMerchantInput } from './inputs/add-merchant.dto';
import { MerchantRepository } from './merchant.repository';

@Injectable()
export class MerchantService {
  constructor(private readonly merchantRepository: MerchantRepository) {}
  addMerchant(input: AddMerchantInput) {
    return this.merchantRepository.addMerchant(input);
  }
}
