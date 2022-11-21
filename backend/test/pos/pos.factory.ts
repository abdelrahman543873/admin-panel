import { name, datatype, random } from 'faker';
import { posTestRepo } from './pos.test-repo';
import { randomUUID } from 'crypto';
import { merchantStatusFactory } from '../merchant/factories/merchant-status.factory';
import { MerchantStatus } from '../../src/merchant/model/merchant-status.entity';

interface PosType {
  type?: string;
  token?: string;
  status?: MerchantStatus;
  title?: string;
  apiToken?: string;
  activated?: boolean;
  module?: boolean;
}

export const buildPosParams = async (obj: PosType = {}): Promise<PosType> => {
  return {
    type: obj.type || name.title(),
    token: obj.token || randomUUID(),
    status: obj.status || (await merchantStatusFactory()),
    title: obj.title || random.word(),
    apiToken: obj.apiToken || randomUUID(),
    activated: obj.activated || datatype.boolean(),
    module: obj.module || datatype.boolean(),
  };
};

export const posFactory = async (obj: PosType = {}) => {
  const params: PosType = await buildPosParams(obj);
  return await posTestRepo().save({
    ...params,
    status: { id: params.status.id },
  });
};
