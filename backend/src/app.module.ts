import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { AppService } from './app.service';
import { MerchantModule } from './merchant/merchant.module';
import { AuthModule } from './shared/auth/auth.module';
import { AppConfigModule } from './shared/config/app.config.module';
import { AppController } from './app.controller';
import { CampaignModule } from './campaign/campaign.module';
import { BranchModule } from './branch/branch.module';
import { DeviceModule } from './device/device.module';

@Module({
  imports: [
    AppConfigModule,
    AuthModule,
    AdminModule,
    MerchantModule,
    CampaignModule,
    BranchModule,
    DeviceModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
