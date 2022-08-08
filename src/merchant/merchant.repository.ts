import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, BaseEntity } from 'typeorm';
import { AddMerchantInput } from './inputs/add-merchant.dto';
import { Merchant } from './model/marchant.entity';

@Injectable()
export class MerchantRepository {
  constructor(
    @InjectRepository(Merchant) private readonly merchant: Repository<Merchant>,
  ) {}

  addMerchant(input: AddMerchantInput) {
    return this.merchant.create(input);
  }
}
