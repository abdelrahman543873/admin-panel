import { CategoryRepository } from './../src/merchant/repositories/category.repository';
import { TestingModule } from '@nestjs/testing';
import NodeEnvironment from 'jest-environment-node';
import { MerchantRepository } from '../src/merchant/repositories/merchant.repository';
import { AdminRepository } from '../src/admin/admin.repository';
import { JwtService } from '@nestjs/jwt';
import { PosRepository } from '../src/merchant/repositories/pos.repository';
import { BranchRepository } from '../src/merchant/repositories/branch.repository';
import { DeviceRepository } from '../src/merchant/repositories/device.repository';

class NestEnvironment extends NodeEnvironment {
  constructor(config, _context) {
    super(config, _context);
  }
  async setup() {
    await super.setup();
    const app: TestingModule = <TestingModule>this.global.app;
    this.global.merchantRepository =
      app.get<MerchantRepository>(MerchantRepository);
    this.global.adminRepository = app.get<AdminRepository>(AdminRepository);
    this.global.jwtService = app.get<JwtService>(JwtService);
    this.global.categoryRepository =
      app.get<CategoryRepository>(CategoryRepository);
    this.global.posRepository = app.get<PosRepository>(PosRepository);
    this.global.branchRepository = app.get<BranchRepository>(BranchRepository);
    this.global.deviceRepository = app.get<DeviceRepository>(DeviceRepository);
  }

  async teardown() {
    await super.teardown();
  }

  getVmContext() {
    return super.getVmContext();
  }
}

export default NestEnvironment;
