import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, BaseEntity } from 'typeorm';
import { AddMerchantInput } from '../inputs/add-merchant.dto';
import { Merchant } from '../model/merchant.entity';
import { GetMerchantInput } from '../inputs/get-merchant.dto';
import { BaseRepository } from '../../shared/abstract/repository.abstract';

@Injectable()
export class MerchantRepository extends BaseRepository<Merchant> {
  constructor(
    @InjectRepository(Merchant) private readonly merchant: Repository<Merchant>,
  ) {
    super(merchant);
  }

  addMerchant(input: AddMerchantInput, logo: Express.Multer.File) {
    return this.merchant.save({
      ...input,
      pos: { id: input.pos },
      ...(input.imageUrl && {
        imageUrl: `${process.env.APP_URL}/merchant/logos/${logo.filename}`,
      }),
    });
  }

  findMerchantById(id: number) {
    return this.merchant.findOne({ where: { id } });
  }

  getMerchant(input: GetMerchantInput) {
    return this.merchant.findOne({
      where: { id: input.id },
      relations: ['pos'],
    });
  }

  getMerchants() {
    return this.merchant.find({ relations: ['pos'] });
  }
}
