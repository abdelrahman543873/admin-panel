import { Injectable } from '@nestjs/common';
import { AddBranchInput } from './inputs/add-branch.dto';
import { GetBranchInput } from './inputs/get-branch.dto';
import { SearchBranchesInput } from '../branch/inputs/search-branches.input';
import { BranchRepository } from './branch.repository';

@Injectable()
export class BranchService {
  constructor(private readonly branchRepository: BranchRepository) {}
  addBranch(input: AddBranchInput) {
    return this.branchRepository.addBranch(input);
  }
  getBranch(input: GetBranchInput) {
    return this.branchRepository.getBranch(input);
  }

  searchBranches(input: SearchBranchesInput) {
    return this.branchRepository.searchBranches(input);
  }
}
