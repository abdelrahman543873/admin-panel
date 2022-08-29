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
import { Device } from './model/device.entity';
import { DeviceRepository } from './repositories/device.repository';
import { ExistingBranchConstraint } from './validators/is-existing-branch';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { filename } from '../shared/utils/multer-file-name';

@Module({
  imports: [
    TypeOrmModule.forFeature([Merchant, Category, Pos, Branch, Device]),
    MulterModule.register({
      preservePath: true,
      storage: diskStorage({
        destination: './client/merchant/logos',
        filename,
      }),
    }),
  ],
  providers: [
    MerchantService,
    MerchantRepository,
    PosRepository,
    CategoryRepository,
    ExistingPosConstraint,
    ExistingCategoryConstraint,
    ExistingMerchantConstraint,
    BranchRepository,
    DeviceRepository,
    ExistingBranchConstraint,
  ],
  controllers: [MerchantController],
})
export class MerchantModule {}
