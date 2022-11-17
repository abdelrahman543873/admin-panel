import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from '../shared/abstract/repository.abstract';
import { Pos } from './pos.entity';
import { paginate } from 'nestjs-typeorm-paginate';
import { SearchPossesDto } from './inputs/search-poses.dto';
@Injectable()
export class PosRepository extends BaseRepository<Pos> {
  constructor(@InjectRepository(Pos) private readonly pos: Repository<Pos>) {
    super(pos);
  }

  findPosById(id: number) {
    return this.pos.findOne({ where: { id } });
  }

  searchPoses(input: SearchPossesDto) {
    return paginate<Pos>(
      this.pos,
      {
        limit: input.limit,
        page: input.offset,
      },
      // typescript ignored , as the tiny int value in the db indicating true or false is a tiny int
      // typeorm converts its successfully to read and write , but when we try to filter using true or false
      // the filter doesn't work
      // @ts-ignore: Unreachable code error
      { ...(input.activated === true && { activated: 1 }) },
      // @ts-ignore: Unreachable code error
      { ...(input.activated === false && { activated: 0 }) },
    );
  }
}
