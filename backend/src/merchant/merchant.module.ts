import { MerchantRepository } from './repositories/merchant.repository';
import { Module } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { MerchantController } from './merchant.controller';
import { Merchant } from './model/merchant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExistingMerchantConstraint } from './validators/is-existing-merchant';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { filename } from '../shared/utils/multer-file-name';
import { MerchantStatus } from './model/merchant-status.entity';
import { MerchantStatusRepository } from './repositories/merchant-status.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Merchant, MerchantStatus]),
    MulterModule.register({
      preservePath: true,
      storage: diskStorage({
        destination: './client/backend/merchant/logos',
        filename,
      }),
    }),
  ],
  providers: [
    MerchantService,
    MerchantRepository,
    ExistingMerchantConstraint,
    MerchantStatusRepository,
  ],
  controllers: [MerchantController],
})
export class MerchantModule {}
