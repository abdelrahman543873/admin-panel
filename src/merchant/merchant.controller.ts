import { MerchantService } from './merchant.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AddMerchantInput } from './inputs/add-merchant.dto';
import { ApiTags } from '@nestjs/swagger';
import { GetMerchantInput } from './inputs/get-merchant.dto';

@ApiTags('Merchant')
@Controller('merchant')
export class MerchantController {
  constructor(private readonly merchantService: MerchantService) {}
  @Post()
  async addMerchant(@Body() input: AddMerchantInput) {
    return await this.merchantService.addMerchant(input);
  }

  @Get()
  async getMerchant(@Param() input: GetMerchantInput) {
    return await this.merchantService.getMerchant(input);
  }

  @Get()
  async getMerchants() {
    return await this.merchantService.getMerchants();
  }
}
