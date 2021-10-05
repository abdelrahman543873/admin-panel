import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { RefreshStrategy } from './refresh.strategy';
import { AdminUser } from './admin-user';
import { AdminUsersController } from './admin-users.controller';
import { AdminUsersService } from './admin-users.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([AdminUser]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: configService.get('AUTH_COKKIE_EXPIRES_IN') },
      }),
    }),
    PassportModule,
  ],
  providers: [AdminUsersService, LocalStrategy, JwtStrategy, RefreshStrategy],
  controllers: [AdminUsersController],
  exports: [AdminUsersService],
})
export class AdminUsersModule {}
