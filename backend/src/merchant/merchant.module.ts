import { MerchantRepository } from './repositories/merchant.repository';
import { Module } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { MerchantController } from './merchant.controller';
import { Merchant } from './model/merchant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pos } from './model/pos.entity';
import { PosRepository } from './repositories/pos.repository';
import { ExistingPosConstraint } from './validators/is-existing-pos.validator';
import { ExistingMerchantConstraint } from './validators/is-existing-merchant';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { filename } from '../shared/utils/multer-file-name';

@Module({
  imports: [
    TypeOrmModule.forFeature([Merchant, Pos]),
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
    ExistingPosConstraint,
    ExistingMerchantConstraint,
  ],
  controllers: [MerchantController],
})
export class MerchantModule {}
