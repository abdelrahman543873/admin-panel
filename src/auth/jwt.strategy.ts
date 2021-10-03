import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AdminUsersService } from 'src/admin-users/admin-users.service';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private adminUsersService: AdminUsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:'process.env.JWT_SECRET',
    });
  }

  async validate(payload: { userId: number }) {
    const user = await this.adminUsersService.findOne(payload.userId);
    return {
      ...user,
    };
  }
}