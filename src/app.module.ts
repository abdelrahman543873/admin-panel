import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

//Admin Users
import { AdminUsersModule } from './admin-users/admin-users.module';
import { AdminUser } from './admin-users/admin-user';

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
    entities: ['**/**.entity{.ts,.js}'],
    synchronize: false,
    migrations: ['database/migrations/*.ts'],
    cli: {
      migrationsDir: 'database/migrations',
    },
  }),
  AdminUsersModule,
  AuthModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
