import { BranchRepository } from '../../../src/merchant/repositories/branch.repository';

export const branchTestRepo = (): BranchRepository => global.branchRepository;
