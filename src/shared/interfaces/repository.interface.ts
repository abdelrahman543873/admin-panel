import { DeepPartial, Entity } from 'typeorm';

export interface RepositoryInterface {
  create(item: DeepPartial<typeof Entity>);
  save(item: DeepPartial<typeof Entity>);
  clear();
}
