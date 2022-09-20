import { MerchantService } from './merchant.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AddMerchantInput } from './inputs/add-merchant.dto';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { GetMerchantInput } from './inputs/get-merchant.dto';
import { JwtAuthGuard } from '../shared/auth/guards/jwt.guard';
import { AddBranchInput } from './inputs/add-branch.dto';
import { GetBranchInput } from './inputs/get-branch.dto';
import { AddDeviceInput } from './inputs/add-device.dto';
import { GetDeviceInput } from './inputs/get-device.input';
import { FileInterceptor } from '@nestjs/platform-express';
import { GetMerchantDevicesDto } from './inputs/get-merchant-devices.dto';
import { GetBranchesInput } from './inputs/get-branches.dto';
import { SearchBranchesInput } from './inputs/search-branches.input';

@ApiTags('Merchant')
@Controller('merchant')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class MerchantController {
  constructor(private readonly merchantService: MerchantService) {}

  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('imageUrl'))
  @Post()
  async addMerchant(
    @Body() input: AddMerchantInput,
    @UploadedFile() logo: Express.Multer.File,
  ) {
    return await this.merchantService.addMerchant(input, logo);
  }

  @Post('device')
  async addDevice(@Body() input: AddDeviceInput) {
    return this.merchantService.addDevice(input);
  }

  @Get('device/:id')
  async getDevice(@Param() input: GetDeviceInput) {
    return this.merchantService.getDevice(input);
  }

  @Get('devices/:branch')
  async getDevices(@Param() id: GetMerchantDevicesDto) {
    return this.merchantService.getDevices(id);
  }

  @Post('branch')
  async addBranch(@Body() input: AddBranchInput) {
    return await this.merchantService.addBranch(input);
  }

  @Get('branches/search')
  async searchBranches(@Query() input: SearchBranchesInput) {
    return await this.merchantService.getBranches(input);
  }

  @Get('branch/:id')
  async getBranch(@Param() input: GetBranchInput) {
    return await this.merchantService.getBranch(input);
  }

  @Get('branches/:id')
  async getBranches(@Param() input: GetBranchesInput) {
    return await this.merchantService.getBranches(input);
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
