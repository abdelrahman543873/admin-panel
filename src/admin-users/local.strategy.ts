import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { CurrentAdminUser } from '../models/current.adminuser';
import { AdminUsersService } from './admin-users.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private adminUserService: AdminUsersService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<CurrentAdminUser> {
    const adminUser = await this.adminUserService.validateUserCredentials(
      email,
      password,
    );

    if (adminUser == null) {
      throw new UnauthorizedException();
    }
    return adminUser;
  }
}
