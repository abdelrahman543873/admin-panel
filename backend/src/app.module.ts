import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { AppService } from './app.service';
import { MerchantModule } from './merchant/merchant.module';
import { AuthModule } from './shared/auth/auth.module';
import { AppConfigModule } from './shared/config/app.config.module';
import { AppController } from './app.controller';
import { CampaignModule } from './campaign/campaign.module';

@Module({
  imports: [AppConfigModule, AuthModule, AdminModule, MerchantModule, CampaignModule],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
