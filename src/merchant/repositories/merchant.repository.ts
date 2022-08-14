import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, BaseEntity } from 'typeorm';
import { AddMerchantInput } from '../inputs/add-merchant.dto';
import { Merchant } from '../model/merchant.entity';
import { GetMerchantInput } from '../inputs/get-merchant.dto';
import { BaseRepository } from '../../shared/abstract/repository.abstract';
import { AddBranchInput } from '../inputs/add-branch.dto';

@Injectable()
export class MerchantRepository extends BaseRepository<Merchant> {
  constructor(
    @InjectRepository(Merchant) private readonly merchant: Repository<Merchant>,
  ) {
    super(merchant);
  }

  addMerchant(input: AddMerchantInput) {
    return this.merchant.create(input);
  }

  findMerchantById(id: number) {
    return this.merchant.findOne({ where: { id } });
  }

  getMerchant(input: GetMerchantInput) {
    return this.merchant.findOne({
      where: { id: input.id },
      relations: ['pos', 'category'],
    });
  }

  getMerchants() {
    return this.merchant.find({ relations: ['pos', 'category'] });
  }
}
