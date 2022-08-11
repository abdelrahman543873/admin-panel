import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller';
import { Admin } from './admin.entity';
import { AdminService } from './admin.service';
import { AdminRepository } from './admin.repository';
@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  providers: [AdminService, AdminRepository],
  controllers: [AdminController],
  exports: [AdminService],
})
export class AdminModule {}
