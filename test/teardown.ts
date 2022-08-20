import { INestApplication } from '@nestjs/common';
import { RepositoryInterface } from '../src/shared/interfaces/repository.interface';
export default async function (): Promise<void> {
  const globalKeys = Object.keys(global);
  // for await (let key of globalKeys) {
  //   if (key.includes('Repository'))
  //     await (global[key] as RepositoryInterface).clear();
  // }
  await (<INestApplication>global.app).close();
}
