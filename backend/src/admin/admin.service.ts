import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import * as randomToken from 'rand-token';
import * as moment from 'moment';
import { AdminRepository } from './admin.repository';

@Injectable()
export class AdminService {
  constructor(private adminUserRepository: AdminRepository) {}

  async validateUserCredentials(email: string, password: string) {
    const admin = await this.adminUserRepository.findAdminByEmail(email);
    if (!admin) return null;
    const adminPass = await this.adminUserRepository.findAdminPass(email);
    const isValidPassword = await bcrypt.compare(password, adminPass.password);
    if (!isValidPassword) return null;
    return admin;
  }

  findUserById(id: number) {
    return this.adminUserRepository.findUserById(id);
  }

  public async getRefreshToken(id: number): Promise<string> {
    const userDataToUpdate = {
      refreshToken: randomToken.generate(16),
      refreshTokenExp: moment().day(1).format('YYYY/MM/DD'),
    };
    await this.adminUserRepository.updateAdminRefreshToken({
      id,
      ...userDataToUpdate,
    });
    return userDataToUpdate.refreshToken;
  }

  public async validRefreshToken(email: string, refreshToken: string) {
    const adminUser = await this.adminUserRepository.validateRefreshToken({
      email: email,
      refreshToken: refreshToken,
    });
    if (!adminUser) return null;
    return adminUser;
  }
}
