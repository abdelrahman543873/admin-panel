import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from '../shared/abstract/repository.abstract';
import { Ecommerce } from './ecommerce.entity';
@Injectable()
export class EcommerceRepository extends BaseRepository<Ecommerce> {
  constructor(
    @InjectRepository(Ecommerce)
    private readonly ecommerce: Repository<Ecommerce>,
  ) {
    super(ecommerce);
  }
}
