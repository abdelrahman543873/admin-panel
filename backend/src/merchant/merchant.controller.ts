import { PaginationDto } from './../shared/dtos/pagination.dto';
import { MerchantService } from './merchant.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AddMerchantInput } from './inputs/add-merchant.dto';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { GetMerchantInput } from './inputs/get-merchant.dto';
import { JwtAuthGuard } from '../shared/auth/guards/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { SearchMerchantsDto } from './inputs/search-merchants.dto';
import { UpdateMerchantDto } from './inputs/update-merchant.dto';

@ApiTags('Merchant')
@Controller('merchant')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class MerchantController {
  constructor(private readonly merchantService: MerchantService) {}

  @Get()
  async getMerchants(@Query() input: SearchMerchantsDto) {
    return await this.merchantService.getMerchants(input);
  }

  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('imageUrl'))
  @Put()
  async updateMerchant(
    @Body() input: UpdateMerchantDto,
    @UploadedFile() logo: Express.Multer.File,
  ) {
    return await this.merchantService.updateMerchant(input, logo);
  }

  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('imageUrl'))
  @Post()
  async addMerchant(
    @Body() input: AddMerchantInput,
    @UploadedFile() logo: Express.Multer.File,
  ) {
    return await this.merchantService.addMerchant(input, logo);
  }

  @Get('ecom')
  async getEcomMerchants(@Query() input: PaginationDto) {
    return await this.merchantService.getEcomMerchants(input);
  }

  @Get('instore')
  async getInstoreMerchants(@Query() input: PaginationDto) {
    return await this.merchantService.getInstoreMerchants(input);
  }

  @Get(':id')
  async getMerchant(@Param() input: GetMerchantInput) {
    return await this.merchantService.getMerchant(input);
  }
}
