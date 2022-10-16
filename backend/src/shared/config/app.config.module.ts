import { migration1664322329124 } from './../../database/initialization-migration';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST_IN_DOCKER || process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT_IN_DOCKER || process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: false,
      migrationsRun: false,
      autoLoadEntities: true,
      migrations: [migration1664322329124],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'client'),
      renderPath: join(process.cwd(), 'client'),
    }),
  ],
})
export class AppConfigModule {}
