import { PaginationDto } from './../shared/dtos/pagination.dto';
import { Injectable } from '@nestjs/common';
import { AddMerchantInput } from './inputs/add-merchant.dto';
import { MerchantRepository } from './repositories/merchant.repository';
import { GetMerchantInput } from './inputs/get-merchant.dto';
import { SearchMerchantsDto } from './inputs/search-merchants.dto';
import { UpdateMerchantDto } from './inputs/update-merchant.dto';

@Injectable()
export class MerchantService {
  constructor(private readonly merchantRepository: MerchantRepository) {}
  addMerchant(input: AddMerchantInput, logo: Express.Multer.File) {
    return this.merchantRepository.addMerchant(input, logo);
  }

  getMerchant(input: GetMerchantInput) {
    return this.merchantRepository.getMerchant(input);
  }

  getMerchants(input: SearchMerchantsDto) {
    return this.merchantRepository.getMerchants(input);
  }

  getEcomMerchants(input: PaginationDto) {
    return this.merchantRepository.getEcomMerchants(input);
  }

  updateMerchant(input: UpdateMerchantDto, logo: Express.Multer.File) {
    return this.merchantRepository.updateMerchant(input, logo);
  }
}
