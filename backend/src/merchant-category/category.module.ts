import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MerchantCategoryRepository } from './category.repository';
import { MerchantCategory } from './merchant-category.entity';
import { ExistingMerchantCategoryConstraint } from './validators/is-existing-category';

@Module({
  imports: [TypeOrmModule.forFeature([MerchantCategory])],
  providers: [MerchantCategoryRepository, ExistingMerchantCategoryConstraint],
})
export class CategoryModule {}
