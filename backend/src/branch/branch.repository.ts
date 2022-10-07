import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { BaseRepository } from '../shared/abstract/repository.abstract';
import { SearchBranchesInput } from './inputs/search-branches.input';
import { AddBranchInput } from './inputs/add-branch.dto';
import { GetBranchInput } from './inputs/get-branch.dto';
import { Branch } from './branch.entity';
import { paginate } from 'nestjs-typeorm-paginate';
@Injectable()
export class BranchRepository extends BaseRepository<Branch> {
  constructor(
    @InjectRepository(Branch) private readonly branch: Repository<Branch>,
  ) {
    super(branch);
  }

  findBranchById(id: number) {
    return this.branch.findOne({ where: { id } });
  }

  addBranch(input: AddBranchInput) {
    return this.branch.save({ ...input, merchant: { id: input.merchantId } });
  }

  getBranch(input: GetBranchInput) {
    return this.branch.findOne({ where: { id: input.id } });
  }

  searchBranches(input: SearchBranchesInput) {
    return paginate<Branch>(
      this.branch,
      { limit: input.limit, page: input.offset },
      {
        where: {
          ...(input.merchantId && { merchant: { id: input.merchantId } }),
          ...(input.enName && { enName: ILike(`%${input.enName}%`) }),
          ...(input.arName && { arName: ILike(`%${input.arName}%`) }),
        },
        relations: ['merchant'],
      },
    );
  }
}
