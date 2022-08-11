import { name } from 'faker';
import { posTestRepo } from './pos.test-repo';
interface PosType {
  type?: string;
}

export const buildPosParams = (obj: PosType = {}): PosType => {
  return {
    type: obj.type || name.title(),
  };
};

export const posFactory = async (obj: PosType = {}) => {
  const params: PosType = buildPosParams(obj);
  return await posTestRepo().save({ ...params });
};
