import { Injectable } from '@nestjs/common';
import { AddMerchantInput } from './inputs/add-merchant.dto';
import { MerchantRepository } from './repositories/merchant.repository';
import { GetMerchantInput } from './inputs/get-merchant.dto';
import { PaginationDto } from '../shared/dtos/pagination.dto';

@Injectable()
export class MerchantService {
  constructor(private readonly merchantRepository: MerchantRepository) {}
  addMerchant(input: AddMerchantInput, logo: Express.Multer.File) {
    return this.merchantRepository.addMerchant(input, logo);
  }

  getMerchant(input: GetMerchantInput) {
    return this.merchantRepository.getMerchant(input);
  }

  getMerchants(input: PaginationDto) {
    return this.merchantRepository.getMerchants(input);
  }
}
