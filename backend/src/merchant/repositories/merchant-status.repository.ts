import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { BaseRepository } from '../../shared/abstract/repository.abstract';
import { MerchantStatus } from '../model/merchant-status.entity';
import { Merchant } from "../model/merchant.entity";
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MerchantStatusRepository extends BaseRepository<MerchantStatus> {
  constructor(
    @InjectRepository(Merchant) private readonly merchantStatus: Repository<MerchantStatus>,
  ) {
    super(merchantStatus);
  }
}
