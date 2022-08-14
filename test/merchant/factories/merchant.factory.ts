import { categoryFactory } from './category.factory';
import { internet, name, random } from 'faker';
import { merchantTestRepo } from '../test-repos/merchant.test-repo';
import { posFactory } from './pos.factory';
interface MerchantType {
  arName?: string;
  enName?: string;
  enSlogan?: string;
  arSlogan?: string;
  accountEmail?: string;
  brandKey?: string;
  logo?: string;
  posType?: string;
  category?: number;
  password?: string;
  pos?: number;
}

export const buildMerchantParams = async (
  obj: MerchantType = {},
): Promise<MerchantType> => {
  return {
    arName: obj.arName || name.title(),
    enName: obj.enName || name.title(),
    password: obj.password || internet.password(),
    enSlogan: obj.enSlogan || name.title(),
    arSlogan: obj.arSlogan || name.title(),
    accountEmail: obj.accountEmail || internet.email(),
    brandKey: obj.brandKey || random.word(),
    logo: obj.logo || internet.url(),
    category: obj.category || (await categoryFactory()).id,
    pos: obj.pos || (await posFactory()).id,
  };
};

export const merchantFactory = async (obj: MerchantType = {}) => {
  const params: MerchantType = await buildMerchantParams(obj);
  return await merchantTestRepo().save({ ...params });
};
