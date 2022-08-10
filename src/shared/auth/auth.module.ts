import { Module } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { AdminUsersModule } from '../../admin-users/admin-users.module';
import { RefreshStrategy } from './refresh.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    AdminUsersModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: configService.get('AUTH_COKKIE_EXPIRES_IN') },
      }),
    }),
  ],
  providers: [JwtStrategy, LocalStrategy, RefreshStrategy],
})
export class AuthModule {}
