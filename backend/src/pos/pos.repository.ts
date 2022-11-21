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
      {
        where: {
          ...(Object.keys(input).includes('activated') && {
            activated: input.activated,
          }),
        },
      },
    );
  }
}
