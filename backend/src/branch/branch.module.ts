import { Module } from '@nestjs/common';
import { BranchService } from './branch.service';
import { BranchController } from './branch.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BranchRepository } from './branch.repository';
import { ExistingBranchConstraint } from './validators/is-existing-branch';
import { Branch } from './branch.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Branch])],
  providers: [BranchService, BranchRepository, ExistingBranchConstraint],
  controllers: [BranchController],
})
export class BranchModule {}
