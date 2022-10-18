import { Injectable } from '@nestjs/common';
import { AddBranchInput } from './inputs/add-branch.dto';
import { GetBranchInput } from './inputs/get-branch.dto';
import { SearchBranchesInput } from '../branch/inputs/search-branches.input';
import { BranchRepository } from './branch.repository';
import { IntegrateBranchDto } from './inputs/integrate-branch.dto';
import { ApplicationException } from '../shared/error/application.exception';
import { IntegrationService } from '../shared/integration/integration.service';
import { MarnResponse } from '../shared/integration/interfaces/marn.interface';
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
    const branch = await this.branchRepository.getBranch({ id: input.id });
    let brandKeys: MarnResponse;
    // will favour a stored brand key over input brand key
    // only uses input brand key if there is no brand key stored in the merchant
    if (branch.merchant.brandKey) {
      brandKeys = await this.integrationService.fetchMarnLocationBrandKeys(
        branch.merchant.brandKey,
      );
    } else if (!branch.merchant.brandKey && input.brandKey) {
      brandKeys = await this.integrationService.fetchMarnLocationBrandKeys(
        input.brandKey,
      );
    } else if (!branch.merchant.brandKey && !input.brandKey) {
      throw new ApplicationException(602);
    }
    await this.branchRepository.updateBrandKey(
      branch.id,
      brandKeys.Locations[0].LocationKey,
    );
    return this.branchRepository.getBranch(input);
  }

  searchBranches(input: SearchBranchesInput) {
    return this.branchRepository.searchBranches(input);
  }
}
