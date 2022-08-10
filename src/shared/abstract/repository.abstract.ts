import { DeepPartial, InsertResult, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class BaseRepository<Entity> {
  constructor(protected readonly repository: Repository<Entity>) {}

  create(item: DeepPartial<Entity>) {
    return this.repository.create(item);
  }

  save(item: DeepPartial<Entity>) {
    return this.repository.save(item);
  }

  deleteAll() {
    return this.clear();
  }
  clear() {
    return this.repository.clear();
  }
}
