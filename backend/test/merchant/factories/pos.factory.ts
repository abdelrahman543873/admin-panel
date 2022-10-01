import { name, datatype, random } from 'faker';
import { posTestRepo } from '../test-repos/pos.test-repo';
import { randomUUID } from 'crypto';
interface PosType {
  type?: string;
  token?: string;
  status?: number;
  title?: string;
  apiToken?: string;
  integration?: boolean;
  module?: boolean;
}

export const buildPosParams = (obj: PosType = {}): PosType => {
  return {
    type: obj.type || name.title(),
    token: obj.token || randomUUID(),
    status: obj.status || datatype.number(),
    title: obj.title || random.word(),
    apiToken: obj.apiToken || randomUUID(),
    integration: obj.integration || datatype.boolean(),
    module: obj.module || datatype.boolean(),
  };
};

export const posFactory = async (obj: PosType = {}) => {
  const params: PosType = buildPosParams(obj);
  return await posTestRepo().save({ ...params });
};
