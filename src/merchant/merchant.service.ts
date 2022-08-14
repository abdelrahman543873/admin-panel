import { Injectable } from '@nestjs/common';
import { AddMerchantInput } from './inputs/add-merchant.dto';
import { MerchantRepository } from './repositories/merchant.repository';
import { GetMerchantInput } from './inputs/get-merchant.dto';
import { AddBranchInput } from './inputs/add-branch.dto';
import { BranchRepository } from './repositories/branch.repository';

@Injectable()
export class MerchantService {
  constructor(
    private readonly merchantRepository: MerchantRepository,
    private readonly branchRepository: BranchRepository,
  ) {}
  addMerchant(input: AddMerchantInput) {
    return this.merchantRepository.addMerchant(input);
  }

  addBranch(input: AddBranchInput) {
    return this.branchRepository.addBranch(input);
  }

  getMerchant(input: GetMerchantInput) {
    return this.merchantRepository.getMerchant(input);
  }

  getMerchants() {
    return this.merchantRepository.getMerchants();
  }
}
