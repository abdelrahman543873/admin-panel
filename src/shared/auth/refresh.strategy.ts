import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AdminUsersService } from '../../admin-users/admin-users.service';

@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor(
    configService: ConfigService,
    private adminUserService: AdminUsersService,
  ) {
    super({
      ignoreExpiration: true,
      passReqToCallback: true,
      secretOrKey: configService.get('JWT_SECRET'),
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          const data = request?.cookies['auth-cookie'];
          if (!data) {
            return null;
          }
          return data.token;
        },
      ]),
    });
  }

  async validate(req: Request, payload: any) {
    if (!payload) {
      throw new BadRequestException('invalid jwt token');
    }
    const data = req?.cookies['auth-cookie'];
    if (!data?.refreshToken) {
      throw new BadRequestException('invalid refresh token');
    }
    const adminUser = await this.adminUserService.validRefreshToken(
      payload.email,
      data.refreshToken,
    );
    if (!adminUser) {
      throw new BadRequestException('token expired');
    }

    return adminUser;
  }
}
