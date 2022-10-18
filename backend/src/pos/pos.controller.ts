import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { PaginationDto } from '../shared/dtos/pagination.dto';
import { PosService } from './pos.service';
import { JwtAuthGuard } from '../shared/auth/guards/jwt.guard';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@ApiTags('Pos')
@Controller('pos')
export class PosController {
  constructor(private posService: PosService) {}

  @Get()
  async getPoses(@Query() input: PaginationDto) {
    return await this.posService.getPoses(input);
  }
}
