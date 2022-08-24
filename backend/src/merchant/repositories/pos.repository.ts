import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from '../../shared/abstract/repository.abstract';
import { Pos } from '../model/pos.entity';
@Injectable()
export class PosRepository extends BaseRepository<Pos> {
  constructor(@InjectRepository(Pos) private readonly pos: Repository<Pos>) {
    super(pos);
  }

  findPosById(id: number) {
    return this.pos.findOne({ where: { id } });
  }
}
