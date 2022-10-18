import { Injectable } from '@nestjs/common';
import { AddBranchInput } from './inputs/add-branch.dto';
import { GetBranchInput } from './inputs/get-branch.dto';
import { SearchBranchesInput } from '../branch/inputs/search-branches.input';
import { BranchRepository } from './branch.repository';
import { IntegrateBranchDto } from './inputs/integrate-branch.dto';
import { HttpService } from '@nestjs/axios';
import { MarnResponse } from './interfaces/marn.interface';
import { firstValueFrom } from 'rxjs';
import { ApplicationException } from '../shared/error/application.exception';
@Injectable()
export class BranchService {
  constructor(
    private readonly branchRepository: BranchRepository,
    private httpsService: HttpService,
  ) {}
  addBranch(input: AddBranchInput) {
    return this.branchRepository.addBranch(input);
  }
  getBranch(input: GetBranchInput) {
    return this.branchRepository.getBranch(input);
  }

  async integrateBranch(input: IntegrateBranchDto) {
    const branch = await this.branchRepository.getBranch({ id: input.id });
    // will favour a stored brand key over input brand key
    // only uses input brand key if there is no brand key stored in the merchant
    if (branch.merchant.brandKey) {
      await this.fetchAndUpdateBrandKey(branch.merchant.brandKey, input.id);
    } else if (!branch.merchant.brandKey && input.brandKey) {
      await this.fetchAndUpdateBrandKey(input.brandKey, input.id);
    } else if (!branch.merchant.brandKey && !input.brandKey) {
      throw new ApplicationException(602);
    }
    return this.branchRepository.getBranch(input);
  }

  searchBranches(input: SearchBranchesInput) {
    return this.branchRepository.searchBranches(input);
  }

  async fetchAndUpdateBrandKey(brandKey: string, id: number) {
    const marnResponse = await firstValueFrom(
      this.httpsService.get<MarnResponse>(
        'http://marn-partner.azurewebsites.net/api/V1/integration/locations',
        {
          headers: {
            Authorization: `Bearer ${process.env.MARN_TOKEN}`,
            BrandKey: brandKey,
          },
        },
      ),
    );
    if (!marnResponse.data.Locations.length) {
      throw new ApplicationException(601);
    }
    await this.branchRepository.updateBrandKey(
      id,
      marnResponse.data.Locations[0].LocationKey,
    );
  }
}
