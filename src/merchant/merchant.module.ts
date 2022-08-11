import { CategoryRepository } from './repositories/category.repository';
import { MerchantRepository } from './repositories/merchant.repository';
import { Module } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { MerchantController } from './merchant.controller';
import { Merchant } from './model/merchant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './model/category.entity';
import { Pos } from './model/pos.entity';
import { PosRepository } from './repositories/pos.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Merchant, Category, Pos])],
  providers: [
    MerchantService,
    MerchantRepository,
    PosRepository,
    CategoryRepository,
  ],
  controllers: [MerchantController],
})
export class MerchantModule {}
