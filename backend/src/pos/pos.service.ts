import { Injectable } from '@nestjs/common';
import { PosRepository } from './pos.repository';
import { PaginationDto } from '../shared/dtos/pagination.dto';

@Injectable()
export class PosService {
  constructor(private posRepository: PosRepository) {}

  getPoses(input: PaginationDto) {
    return this.posRepository.getPoses(input);
  }
}
