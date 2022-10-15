import { internet, name, phone, random, datatype } from 'faker';
import { merchantTestRepo } from '../test-repos/merchant.test-repo';
import { posFactory } from './pos.factory';
import { Merchant } from '../../../src/merchant/model/merchant.entity';
import { Pos } from '../../../src/merchant/model/pos.entity';
import { SUBSCRIPTION_STATUS } from '../../../src/merchant/merchant.enum';

interface MerchantType {
  enName?: string;
  arName?: string;
  enDescription?: string;
  arDescription?: string;
  email?: string;
  brandKey?: string;
  imageUrl?: string;
  password?: string;
  pos?: Pos;
  token?: string;
  phoneNumber?: string;
  integrationId?: string;
  subscriptionStatus?: string;
}

export const buildMerchantParams = async (
  obj: MerchantType = {},
): Promise<MerchantType> => {
  return {
    enName: obj.enName || datatype.uuid(),
    arName: obj.arName || datatype.uuid(),
    password: obj.password || internet.password(),
    enDescription: obj.enDescription || name.title(),
    arDescription: obj.arDescription || name.title(),
    email: obj.email || internet.email(),
    brandKey: obj.brandKey || random.word(),
    imageUrl: obj.imageUrl || internet.url(),
    pos: obj.pos || (await posFactory()),
    token: obj.token || datatype.uuid(),
    phoneNumber: obj.phoneNumber || datatype.string(14),
    integrationId: obj.integrationId || datatype.string(),
    subscriptionStatus:
      obj.integrationId ||
      random.arrayElement(Object.keys(SUBSCRIPTION_STATUS)),
  };
};

export const merchantFactory = async (
  obj: MerchantType = {},
): Promise<Merchant> => {
  const params: MerchantType = await buildMerchantParams(obj);
  return await merchantTestRepo().save({
    ...params,
    pos: { id: params.pos.id },
  });
};
