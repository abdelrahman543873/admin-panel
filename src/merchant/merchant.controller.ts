import { MerchantService } from './merchant.service';
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AddMerchantInput } from './inputs/add-merchant.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { GetMerchantInput } from './inputs/get-merchant.dto';
import { JwtAuthGuard } from '../shared/auth/guards/jwt.guard';
import { AddBranchInput } from './inputs/add-branch.dto';
import { GetBranchInput } from './inputs/get-branch.dto';
import { AddDeviceInput } from './inputs/add-device.dto';
import { GetDeviceInput } from './inputs/get-device.input';

@ApiTags('Merchant')
@Controller('merchant')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class MerchantController {
  constructor(private readonly merchantService: MerchantService) {}

  @Post()
  async addMerchant(@Body() input: AddMerchantInput) {
    return await this.merchantService.addMerchant(input);
  }

  @Post('device')
  async addDevice(@Body() input: AddDeviceInput) {
    return this.merchantService.addDevice(input);
  }

  @Get('device/:id')
  async getDevice(@Param() input: GetDeviceInput) {
    return this.merchantService.getDevice(input);
  }

  @Get('device')
  async getDevices() {
    return this.merchantService.getDevices();
  }

  @Post('branch')
  async addBranch(@Body() input: AddBranchInput) {
    return await this.merchantService.addBranch(input);
  }

  @Get('branch/:id')
  async getBranch(@Param() input: GetBranchInput) {
    return await this.merchantService.getBranch(input);
  }

  @Get('branch')
  async getBranches() {
    return await this.merchantService.getBranches();
  }

  @Get(':id')
  async getMerchant(@Param() input: GetMerchantInput) {
    return await this.merchantService.getMerchant(input);
  }

  @Get()
  async getMerchants() {
    return await this.merchantService.getMerchants();
  }
}
