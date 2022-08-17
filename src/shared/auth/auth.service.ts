import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { AdminService } from '../../admin/admin.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly adminService: AdminService,
    private jwtService: JwtService,
  ) {}

  validateUser(email: string, password: string) {
    return this.adminService.validateUserCredentials(email, password);
  }

  login(user: any) {
    const payload = { id: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  findUserById(id: number) {
    return this.adminService.findUserById(id);
  }
}
