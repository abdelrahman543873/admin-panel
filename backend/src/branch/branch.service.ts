import { Injectable } from '@nestjs/common';
import { AddBranchInput } from './inputs/add-branch.dto';
import { GetBranchInput } from './inputs/get-branch.dto';
import { SearchBranchesInput } from '../branch/inputs/search-branches.input';
import { BranchRepository } from './branch.repository';
import { IntegrateBranchDto } from './inputs/integrate-branch.dto';
import { ApplicationException } from '../shared/error/application.exception';
import { IntegrationService } from '../shared/integration/integration.service';
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
    let posBrandKeys: Array<string>;
    // will favour a stored brand key over input brand key
    // only uses input brand key if there is no brand key stored in the merchant
    if (branch.merchant.brandKey) {
      posBrandKeys = await this.integrationService.fetchBranchBrandKeys({
        brandKey: branch.merchant.brandKey,
        pos: branch.merchant.pos.title,
      });
    } else if (!branch.merchant.brandKey && input.brandKey) {
      posBrandKeys = await this.integrationService.fetchBranchBrandKeys({
        brandKey: input.brandKey,
        pos: branch.merchant.pos.title,
      });
    } else if (!branch.merchant.brandKey && !input.brandKey) {
      throw new ApplicationException(602);
    }
    // allows user to choose which pos branch to integrate if there is more than one pos branch available
    // and throws error , if user enters branch id that is larger than available pos branches
    if (posBrandKeys.length > 1 && input.posBranch + 1 > posBrandKeys.length) {
      throw new ApplicationException(604);
    }
    await this.branchRepository.updateBrandKey(
      branch.id,
      posBrandKeys.length > 1 ? posBrandKeys[input.posBranch] : posBrandKeys[0],
    );
    return this.branchRepository.getBranch(input);
  }

  searchBranches(input: SearchBranchesInput) {
    return this.branchRepository.searchBranches(input);
  }
}
