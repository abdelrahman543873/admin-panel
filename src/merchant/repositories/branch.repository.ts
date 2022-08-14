import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from '../../shared/abstract/repository.abstract';
import { AddBranchInput } from '../inputs/add-branch.dto';
import { Branch } from '../model/branch.entity';
@Injectable()
export class BranchRepository extends BaseRepository<Branch> {
  constructor(
    @InjectRepository(Branch) private readonly branch: Repository<Branch>,
  ) {
    super(branch);
  }

  addBranch(input: AddBranchInput) {
    return this.branch.create(input);
  }
}
