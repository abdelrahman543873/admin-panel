import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminUsersModule } from './admin-users/admin-users.module';
import {AdminUser} from './admin-users/entities/admin-user.entity';
import { AuthModule } from './auth/auth.module';
const ENV = process.env.NODE_ENV;
const entities = [AdminUser];


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
    entities: entities,
    synchronize: true,
  }),
  AdminUsersModule,
  AuthModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
