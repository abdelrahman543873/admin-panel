import { Injectable } from '@nestjs/common';
import { AddBranchInput } from './inputs/add-branch.dto';
import { GetBranchInput } from './inputs/get-branch.dto';
import { SearchBranchesInput } from '../branch/inputs/search-branches.input';
import { BranchRepository } from './branch.repository';
import { IntegrateBranchDto } from './inputs/integrate-branch.dto';
import { ApplicationException } from '../shared/error/application.exception';
import { IntegrationService } from '../shared/integration/integration.service';
import { GetPosBranches } from './inputs/get-pos-branches.dto';
@Injectable()
export class BranchService {
  constructor(
    private readonly branchRepository: BranchRepository,
    private integrationService: IntegrationService,
  ) {}
  addBranch(input: AddBranchInput) {
    return this.branchRepository.addBranch(input);
  }
  getBranch(input: GetBranchInput) {
    return this.branchRepository.getBranch(input);
  }

  async integrateBranch(input: IntegrateBranchDto) {
    return await this.branchRepository.updateBrandKey(input.id, input.brandKey);
  }

  searchBranches(input: SearchBranchesInput) {
    return this.branchRepository.searchBranches(input);
  }

  async getPosBranches(input: GetPosBranches) {
    const branch = await this.branchRepository.getBranch({
      id: input.branchId,
    });
    if (!branch.merchant.brandKey) throw new ApplicationException(605);
    const posBrandKeys = await this.integrationService.fetchBranchBrandKeys({
      brandKey: branch.merchant.brandKey,
      pos: branch.merchant.pos.title,
      resourceType: 'branch',
    });
    return posBrandKeys;
  }
}
