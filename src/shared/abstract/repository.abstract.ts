import { DeepPartial, Repository } from 'typeorm';
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
}
