import { Injectable } from '@nestjs/common';
import { CreateAdminUserDto } from './dto/create-admin-user.dto';
import { UpdateAdminUserDto } from './dto/update-admin-user.dto';
import { AdminUser } from './entities/admin-user.entity';


@Injectable()
export class AdminUsersService {
 

  async create(createAdminUserDto: CreateAdminUserDto) {
    const adminUser = AdminUser.create(createAdminUserDto);
    await adminUser.save();

    delete adminUser.password;
    return adminUser;
  }

  async findOne(id: number) {
    const adminUser = await AdminUser.findOne(id);
    delete adminUser.password;
    return adminUser;
  }



  async findByEmail(email: string) {
    return await AdminUser.findOne({
      where: {
        email: email,
      },
    });
  }

  findAll() {
    return `This action returns all adminUsers`;
  }

  update(id: number, updateAdminUserDto: UpdateAdminUserDto) {
    return `This action updates a #${id} adminUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} adminUser`;
  }
}
