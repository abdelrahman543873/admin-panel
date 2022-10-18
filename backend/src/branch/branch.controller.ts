import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AddBranchInput } from './inputs/add-branch.dto';
import { GetBranchInput } from './inputs/get-branch.dto';
import { SearchBranchesInput } from '../branch/inputs/search-branches.input';
import { BranchService } from './branch.service';
import { IntegrateBranchDto } from './inputs/integrate-branch.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Branch')
@Controller('branch')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}
  @Post()
  async addBranch(@Body() input: AddBranchInput) {
    return await this.branchService.addBranch(input);
  }

  @Get('search')
  async searchBranches(@Query() input: SearchBranchesInput) {
    return await this.branchService.searchBranches(input);
  }

  @Get(':id')
  async getBranch(@Param() input: GetBranchInput) {
    return await this.branchService.getBranch(input);
  }

  @Post('integrate')
  async integrateBranch(@Body() input: IntegrateBranchDto) {
    return await this.branchService.integrateBranch(input);
  }
}
