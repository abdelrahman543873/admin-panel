import { Test } from '@nestjs/testing';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from '../src/app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { MerchantRepository } from '../src/merchant/repositories/merchant.repository';
import { AdminRepository } from '../src/admin/admin.repository';
import { JwtService } from '@nestjs/jwt';
import { BranchRepository } from '../src/branch/branch.repository';
import { DeviceRepository } from '../src/device/device.repository';
import { Connection } from 'typeorm';
import { CampaignRepository } from '../src/campaign/repositories/campaign.repository';
import { MerchantCategoryRepository } from '../src/merchant-category/merchant-category.repository';
import { MerchantStatusRepository } from '../src/merchant/repositories/merchant-status.repository';
import { CampaignTypeRepository } from '../src/campaign/repositories/campaign-type.repository';
import { CampaignImageRepository } from '../src/campaign/repositories/campaign-image.repository';
import { ApplicationExceptionFilter } from '../src/shared/error/application-error.filter';
import { PosRepository } from '../src/pos/pos.repository';

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
  app.useGlobalFilters(new ApplicationExceptionFilter());
  app.setGlobalPrefix('backend');
  await app.init();
  global.app = app;
  const connection = app.get<Connection>(Connection);
  // done this way to allow deletion of all tables
  await connection.query('SET FOREIGN_KEY_CHECKS = 0;');
  global.merchantRepository = app.get<MerchantRepository>(MerchantRepository);
  global.adminRepository = app.get<AdminRepository>(AdminRepository);
  global.jwtService = app.get<JwtService>(JwtService);
  global.merchantCategoryRepository = app.get<MerchantCategoryRepository>(
    MerchantCategoryRepository,
  );
  global.posRepository = app.get<PosRepository>(PosRepository);
  global.branchRepository = app.get<BranchRepository>(BranchRepository);
  global.deviceRepository = app.get<DeviceRepository>(DeviceRepository);
  global.campaignRepository = app.get<CampaignRepository>(CampaignRepository);
  global.merchantStatusRepository = app.get<MerchantStatusRepository>(
    MerchantStatusRepository,
  );
  global.campaignTypeRepository = app.get<CampaignTypeRepository>(
    CampaignTypeRepository,
  );
  global.campaignImageRepository = app.get<CampaignImageRepository>(
    CampaignImageRepository,
  );
};
