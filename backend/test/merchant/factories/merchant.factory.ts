import { internet, name, phone, random, datatype } from 'faker';
import { merchantTestRepo } from '../test-repos/merchant.test-repo';
import { posFactory } from '../../pos/pos.factory';
import { Merchant } from '../../../src/merchant/model/merchant.entity';
import { Pos } from '../../../src/pos/pos.entity';
import { MerchantCategory } from '../../../src/merchant-category/merchant-category.entity';
import { merchantCategoryFactory } from '../../merchant-category/merchant-category.factory';

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
  subscriptionStatus?: string;
  category?: MerchantCategory;
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
    brandKey: obj.brandKey ?? random.word(),
    imageUrl: obj.imageUrl || internet.url(),
    pos: obj.pos || (await posFactory()),
    category: obj.category || (await merchantCategoryFactory()),
    token: obj.token || datatype.uuid(),
    phoneNumber: obj.phoneNumber || datatype.string(14),
    subscriptionStatus: obj.subscriptionStatus || 'TRIAL',
  };
};

export const merchantFactory = async (
  obj: MerchantType = {},
): Promise<Merchant> => {
  const params: MerchantType = await buildMerchantParams(obj);
  return await merchantTestRepo().save({
    ...params,
    pos: { id: params.pos.id },
    category: { id: params.category.id },
  });
};
