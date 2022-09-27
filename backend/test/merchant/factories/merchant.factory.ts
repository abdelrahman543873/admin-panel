import { internet, name, random } from 'faker';
import { merchantTestRepo } from '../test-repos/merchant.test-repo';
import { posFactory } from './pos.factory';
import { Merchant } from '../../../src/merchant/model/merchant.entity';
interface MerchantType {
  enName?: string;
  arName?: string;
  enDescription?: string;
  arDescription?: string;
  email?: string;
  brandKey?: string;
  imageUrl?: string;
  password?: string;
  pos?: number;
}

export const buildMerchantParams = async (
  obj: MerchantType = {},
): Promise<MerchantType> => {
  return {
    enName: obj.enName || name.title(),
    arName: obj.arName || name.title(),
    password: obj.password || internet.password(),
    enDescription: obj.enDescription || name.title(),
    arDescription: obj.arDescription || name.title(),
    email: obj.email || internet.email(),
    brandKey: obj.brandKey || random.word(),
    imageUrl: obj.imageUrl || internet.url(),
    pos: obj.pos || (await posFactory()).id,
  };
};

export const merchantFactory = async (
  obj: MerchantType = {},
): Promise<Merchant> => {
  const params: MerchantType = await buildMerchantParams(obj);
  return await merchantTestRepo().save({ ...params });
};
