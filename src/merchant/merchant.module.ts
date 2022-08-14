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
import { ExistingPosConstraint } from './validators/is-existing-pos.validator';
import { ExistingCategoryConstraint } from './validators/is-existing-category';
import { Branch } from './model/branch.entity';
import { BranchRepository } from './repositories/branch.repository';
import { ExistingMerchantConstraint } from './validators/is-existing-merchant';

@Module({
  imports: [TypeOrmModule.forFeature([Merchant, Category, Pos, Branch])],
  providers: [
    MerchantService,
    MerchantRepository,
    PosRepository,
    CategoryRepository,
    ExistingPosConstraint,
    ExistingCategoryConstraint,
    ExistingMerchantConstraint,
    BranchRepository,
  ],
  controllers: [MerchantController],
})
export class MerchantModule {}
