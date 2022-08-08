import { MerchantRepository } from './merchant.repository';
import { Module } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { MerchantController } from './merchant.controller';
import { Merchant } from './model/marchant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Merchant])],
  providers: [MerchantService, MerchantRepository],
  controllers: [MerchantController],
})
export class MerchantModule {}
