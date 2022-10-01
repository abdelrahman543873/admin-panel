import { BranchRepository } from '../../src/branch/branch.repository';

export const branchTestRepo = (): BranchRepository => global.branchRepository;
