import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThanOrEqual } from 'typeorm';
import { Admin } from './admin.entity';
import * as moment from 'moment';
import { BaseRepository } from '../shared/abstract/repository.abstract';

export class AdminRepository extends BaseRepository<Admin> {
  constructor(@InjectRepository(Admin) private adminUser: Repository<Admin>) {
    super(adminUser);
  }

  findAdminByEmail(email: string) {
    return this.adminUser.findOne({ where: { email } });
  }

  findAdminPass(email: string) {
    return this.adminUser.findOne({ where: { email }, select: ['password'] });
  }

  validateRefreshToken(input: { email: string; refreshToken: string }) {
    const currentDate = moment().day(1).format('YYYY/MM/DD');
    return this.adminUser.findOne({
      where: { ...input, refreshTokenExp: MoreThanOrEqual(currentDate) },
    });
  }

  updateAdminRefreshToken(input: {
    id: number;
    refreshToken: string;
    refreshTokenExp: string;
  }) {
    return this.adminUser.update(
      { id: input.id },
      {
        refreshToken: input.refreshToken,
        refreshTokenExp: input.refreshTokenExp,
      },
    );
  }
}
