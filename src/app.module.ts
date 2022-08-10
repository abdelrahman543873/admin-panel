import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

//Admin Users
import { AdminUsersModule } from './admin-users/admin-users.module';
import { MerchantModule } from './merchant/merchant.module';
import { AuthModule } from './shared/auth/auth.module';

const ENV = process.env.NODE_ENV;
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: !ENV ? 'env/.env.development' : `env/.env.${ENV}`,
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      migrations: ['database/migrations/*.ts'],
      autoLoadEntities: true,
    }),
    AuthModule,
    AdminUsersModule,
    MerchantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
