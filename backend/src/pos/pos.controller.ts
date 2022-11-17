import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { PosService } from './pos.service';
import { JwtAuthGuard } from '../shared/auth/guards/jwt.guard';
import { ApiTags } from '@nestjs/swagger';
import { SearchPossesDto } from './inputs/search-poses.dto';

@UseGuards(JwtAuthGuard)
@ApiTags('Pos')
@Controller('pos')
export class PosController {
  constructor(private posService: PosService) {}

  @Get()
  async searchPoses(@Query() input: SearchPossesDto) {
    return await this.posService.searchPoses(input);
  }
}
