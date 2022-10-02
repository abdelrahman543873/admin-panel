import { MerchantService } from './merchant.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AddMerchantInput } from './inputs/add-merchant.dto';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { GetMerchantInput } from './inputs/get-merchant.dto';
import { JwtAuthGuard } from '../shared/auth/guards/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';

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

  @Get(':id')
  async getMerchant(@Param() input: GetMerchantInput) {
    return await this.merchantService.getMerchant(input);
  }

  @Get()
  async getMerchants() {
    return await this.merchantService.getMerchants();
  }
}
