import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MerchantCategoryRepository } from './merchant-category.repository';
import { MerchantCategory } from './merchant-category.entity';
import { ExistingMerchantCategoryConstraint } from './validators/is-existing-category';
import { MerchantCategoryController } from './merchant-category.controller';
import { MerchantCategoryService } from './merchant-category.service';

@Module({
  imports: [TypeOrmModule.forFeature([MerchantCategory])],
  providers: [MerchantCategoryRepository, ExistingMerchantCategoryConstraint, MerchantCategoryService],
  controllers: [MerchantCategoryController],
})
export class MerchantCategoryModule {}
