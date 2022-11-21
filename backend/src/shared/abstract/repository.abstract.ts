import { DeepPartial, FindManyOptions, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { UpsertOptions } from 'typeorm/repository/UpsertOptions';
import { RepositoryInterface } from '../interfaces/repository.interface';

export abstract class BaseRepository<Entity> implements RepositoryInterface {
  constructor(protected readonly repository: Repository<Entity>) {}

  create(item: DeepPartial<Entity>) {
    return this.repository.create(item);
  }

  save(item: DeepPartial<Entity>) {
    return this.repository.save(item);
  }

  clear() {
    return this.repository.clear();
  }

  upsert(input: QueryDeepPartialEntity<Entity>, updatedFields: [string]) {
    return this.repository.upsert(input, updatedFields);
  }

  find(input: FindManyOptions<Entity>) {
    return this.repository.find(input);
  }

  findOne(input: FindManyOptions<Entity>) {
    return this.repository.findOne(input);
  }
}
