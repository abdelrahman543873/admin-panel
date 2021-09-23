import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AdminUser } from 'src/admin-users/entities/admin-user.entity';
import { AdminUsersService } from 'src/admin-users/admin-users.service';
import { AuthLoginDto } from './dto/auth-login.dto';

@Injectable()
export class AuthService {
  constructor(
    private adminUsersService: AdminUsersService,
    private jwtService: JwtService,
  ) {}

  async login(authLoginDto: AuthLoginDto) {
    const user = await this.validateUser(authLoginDto);

    const payload = {
      userId: user.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
      redirect_url: '/dashboard'
    };
  }

  async validateUser(authLoginDto: AuthLoginDto): Promise<AdminUser> {
    const { email, password } = authLoginDto;

    const user = await this.adminUsersService.findByEmail(email);
    if (!(await user?.validatePassword(password))) {
      throw new UnauthorizedException();
    }

    return user;
  }
}