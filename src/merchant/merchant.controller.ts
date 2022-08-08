import { MerchantService } from './merchant.service';
import { Body, Controller, Post } from '@nestjs/common';
import { AddMerchantInput } from './inputs/add-merchant.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Merchant')
@Controller('merchant')
export class MerchantController {
  constructor(private readonly merchantService: MerchantService) {}
  @Post()
  async addMerchant(@Body() input: AddMerchantInput) {
    return await this.merchantService.addMerchant(input);
  }
}
