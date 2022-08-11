import { Injectable } from '@nestjs/common';
import { AdminService } from '../../admin/admin.service';

@Injectable()
export class AuthService {
  constructor(private readonly adminService: AdminService) {}

  validateUser(email: string, password: string) {
    return this.adminService.validateUserCredentials(email, password);
  }
}
