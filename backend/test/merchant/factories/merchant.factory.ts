import { categoryFactory } from './category.factory';
import { internet, name, random } from 'faker';
import { merchantTestRepo } from '../test-repos/merchant.test-repo';
import { posFactory } from './pos.factory';
interface MerchantType {
  name?: string;
  name_ar?: string;
  description?: string;
  description_ar?: string;
  email?: string;
  brandKey?: string;
  imageUrl?: string;
  category?: number;
  password?: string;
  pos?: number;
}

export const buildMerchantParams = async (
  obj: MerchantType = {},
): Promise<MerchantType> => {
  return {
    name: obj.name || name.title(),
    name_ar: obj.name_ar || name.title(),
    password: obj.password || internet.password(),
    description: obj.description || name.title(),
    description_ar: obj.description_ar || name.title(),
    email: obj.email || internet.email(),
    brandKey: obj.brandKey || random.word(),
    imageUrl: obj.imageUrl || internet.url(),
    category: obj.category || (await categoryFactory()).id,
    pos: obj.pos || (await posFactory()).id,
  };
};

export const merchantFactory = async (obj: MerchantType = {}) => {
  const params: MerchantType = await buildMerchantParams(obj);
  return await merchantTestRepo().save({ ...params });
};
