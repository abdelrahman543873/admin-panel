import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { AddMerchantInput } from '../inputs/add-merchant.dto';
import { Merchant } from '../model/merchant.entity';
import { GetMerchantInput } from '../inputs/get-merchant.dto';
import { BaseRepository } from '../../shared/abstract/repository.abstract';
import { paginate } from 'nestjs-typeorm-paginate';
import { SearchMerchantsDto } from '../inputs/search-merchants.dto';
import { UpdateMerchantDto } from '../inputs/update-merchant.dto';

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
      category: { id: input.category },
      ...(logo && {
        imageUrl: `${
          process.env.ONLINE_HOST || process.env.APP_URL
        }/merchant/logos/${logo.filename}`,
      }),
    });
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

  getMerchants(input: SearchMerchantsDto) {
    return paginate<Merchant>(
      this.merchant,
      { limit: input.limit, page: input.offset },
      {
        where: {
          ...(input.enName && { enName: ILike(`%${input.enName}%`) }),
          ...(input.arName && { enName: ILike(`%${input.arName}%`) }),
        },
        relations: ['pos', 'ecommerceType'],
      },
    );
  }

  updateMerchant(input: UpdateMerchantDto, logo: Express.Multer.File) {
    return this.merchant.update(
      { id: input.id },
      {
        ...input,
        ...(input.pos && { pos: { id: input.pos } }),
        ...(input.category && { category: { id: input.category } }),
        ...(logo && {
          imageUrl: `${
            process.env.ONLINE_HOST || process.env.APP_URL
          }/merchant/logos/${logo.filename}`,
        }),
      },
    );
  }
}
