import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from '../../shared/abstract/repository.abstract';
import { AddBranchInput } from '../inputs/add-branch.dto';
import { Branch } from '../model/branch.entity';
import { GetBranchInput } from '../inputs/get-branch.dto';
import { GetBranchesInput } from '../inputs/get-branches.dto';
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
    return this.branch.create(input);
  }

  getBranch(input: GetBranchInput) {
    return this.branch.findOne({ where: { id: input.id } });
  }

  getBranches(input: GetBranchesInput) {
    return this.branch.find({ where: { merchant: input.id } });
  }
}
