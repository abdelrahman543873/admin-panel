import { name, random, internet } from 'faker';
import { merchantCategoryTestRepo } from './merchant-category.repo';
import { MerchantCategory } from '../../src/merchant-category/merchant-category.entity';

interface MerchantCategoryType {
  enTitle?: string;
  arTitle?: string;
  enDescription?: string;
  arDescription?: string;
  logo?: string;
}

export const buildCategoryParams = (
  obj: MerchantCategoryType = {},
): MerchantCategoryType => {
  return {
    enTitle: obj.enTitle || name.title(),
    arTitle: obj.arTitle || name.title(),
    enDescription: obj.enDescription || random.words(),
    arDescription: obj.arDescription || random.words(),
    logo: obj.logo || internet.url(),
  };
};

export const merchantCategoryFactory = async (
  obj: MerchantCategoryType = {},
): Promise<MerchantCategory> => {
  const params: MerchantCategoryType = buildCategoryParams(obj);
  return await merchantCategoryTestRepo().save({ ...params });
};
