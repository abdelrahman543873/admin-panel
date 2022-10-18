import { PosRepository } from '../../src/pos/pos.repository';

export const posTestRepo = (): PosRepository => global.posRepository;
