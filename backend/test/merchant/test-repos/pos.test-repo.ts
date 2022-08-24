import { PosRepository } from '../../../src/merchant/repositories/pos.repository';

export const posTestRepo = (): PosRepository => global.posRepository;
