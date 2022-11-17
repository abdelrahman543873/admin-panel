import { Injectable } from '@nestjs/common';
import { SearchPossesDto } from './inputs/search-poses.dto';
import { PosRepository } from './pos.repository';

@Injectable()
export class PosService {
  constructor(private posRepository: PosRepository) {}

  searchPoses(input: SearchPossesDto) {
    return this.posRepository.searchPoses(input);
  }
}
