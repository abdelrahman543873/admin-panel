import { PaginationDto } from './../../shared/dtos/pagination.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, IsNull, Not, Repository } from 'typeorm';
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

  getEcomMerchants(input: SearchMerchantsDto) {
    return paginate<Merchant>(
      this.merchant,
      { limit: input.limit, page: input.offset },
      {
        where: {
          ...(input.enName && { enName: ILike(`%${input.enName}%`) }),
          ...(input.arName && { enName: ILike(`%${input.arName}%`) }),
          ecommerceType: Not(IsNull()),
        },
        relations: ['pos', 'category', 'ecommerceType'],
      },
    );
  }

  getInstoreMerchants(input: SearchMerchantsDto) {
    return paginate<Merchant>(
      this.merchant,
      { limit: input.limit, page: input.offset },
      {
        where: {
          ...(input.enName && { enName: ILike(`%${input.enName}%`) }),
          ...(input.arName && { enName: ILike(`%${input.arName}%`) }),
          pos: Not(IsNull()),
        },
        relations: ['pos', 'category'],
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
        // done per business need
        // when a ratm branch is updated , the posBusinessId column value should be the same as the id value
        ...(input.accessToken && { brandKey: `${input.id}` }),
      },
    );
  }
}
