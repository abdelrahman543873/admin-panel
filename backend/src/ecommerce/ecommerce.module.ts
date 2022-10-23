import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EcommerceRepository } from './ecommerce.repository';
import { Ecommerce } from './ecommerce.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ecommerce])],
  providers: [EcommerceRepository],
})
export class EcommerceModule {}
