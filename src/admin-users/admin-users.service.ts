import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { AdminUser } from './admin-user.entity';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import * as randomToken from 'rand-token';
import * as moment from 'moment';

@Injectable()
export class AdminUsersService {
  constructor(
    @InjectRepository(AdminUser) private adminUser: Repository<AdminUser>,
    private jwtService: JwtService,
  ) {}

  public async validateUserCredentials(email: string, password: string) {
    const adminUser = await this.adminUser.findOne({ where: { email } });

    if (adminUser == null) {
      return null;
    }

    const isValidPassword = await bcrypt.compare(password, adminUser.password);
    if (!isValidPassword) {
      return null;
    }

    return {
      id: adminUser.id,
      name: adminUser.name,
      email: adminUser.email,
    };
  }

  public async getJwtToken(adminUser): Promise<string> {
    const payload = {
      ...adminUser,
    };
    return this.jwtService.signAsync(payload);
  }

  public async getRefreshToken(id: number): Promise<string> {
    const userDataToUpdate = {
      refreshToken: randomToken.generate(16),
      refreshTokenExp: moment().day(1).format('YYYY/MM/DD'),
    };

    await this.adminUser.update(id, userDataToUpdate);
    return userDataToUpdate.refreshToken;
  }

  public async validRefreshToken(email: string, refreshToken: string) {
    const currentDate = moment().day(1).format('YYYY/MM/DD');
    const adminUser = await this.adminUser.findOne({
      where: {
        email: email,
        refreshToken: refreshToken,
        refreshTokenExp: MoreThanOrEqual(currentDate),
      },
    });

    if (!adminUser) {
      return null;
    }

    return {
      id: adminUser.id,
      name: adminUser.name,
      email: adminUser.email,
    };
  }
}
