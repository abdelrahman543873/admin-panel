import { Test } from '@nestjs/testing';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from '../src/app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { MerchantRepository } from '../src/merchant/repositories/merchant.repository';
import { CategoryRepository } from './../src/merchant/repositories/category.repository';
import { AdminRepository } from '../src/admin/admin.repository';
import { JwtService } from '@nestjs/jwt';
import { PosRepository } from '../src/merchant/repositories/pos.repository';
import { BranchRepository } from '../src/branch/branch.repository';
import { DeviceRepository } from '../src/merchant/repositories/device.repository';
import { Connection } from 'typeorm';
import { CampaignRepository } from '../src/campaign/campaign.repository';

export default async (): Promise<void> => {
  const module = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();
  const app = module.createNestApplication<NestExpressApplication>();
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      stopAtFirstError: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.setGlobalPrefix('backend');
  await app.init();
  global.app = app;
  const connection = app.get<Connection>(Connection);
  // done this way to allow deletion of all tables
  await connection.query('SET FOREIGN_KEY_CHECKS = 0;');
  global.merchantRepository = app.get<MerchantRepository>(MerchantRepository);
  global.adminRepository = app.get<AdminRepository>(AdminRepository);
  global.jwtService = app.get<JwtService>(JwtService);
  global.categoryRepository = app.get<CategoryRepository>(CategoryRepository);
  global.posRepository = app.get<PosRepository>(PosRepository);
  global.branchRepository = app.get<BranchRepository>(BranchRepository);
  global.deviceRepository = app.get<DeviceRepository>(DeviceRepository);
  global.campaignRepository = app.get<CampaignRepository>(CampaignRepository);
};
