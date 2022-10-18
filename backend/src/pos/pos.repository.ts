import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from '../shared/abstract/repository.abstract';
import { Pos } from './pos.entity';
import { paginate } from 'nestjs-typeorm-paginate';
import { PaginationDto } from '../shared/dtos/pagination.dto';
@Injectable()
export class PosRepository extends BaseRepository<Pos> {
  constructor(@InjectRepository(Pos) private readonly pos: Repository<Pos>) {
    super(pos);
  }

  findPosById(id: number) {
    return this.pos.findOne({ where: { id } });
  }

  getPoses(input: PaginationDto) {
    return paginate<Pos>(this.pos, {
      limit: input.limit,
      page: input.offset,
    });
  }
}
