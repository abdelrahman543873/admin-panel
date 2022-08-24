import { AdminRepository } from '../../src/admin/admin.repository';

export const adminTestRepo = (): AdminRepository => global.adminRepository;
