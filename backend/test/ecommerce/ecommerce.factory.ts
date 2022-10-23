import { name, internet } from 'faker';
import { ecommerceTestRepo } from './ecommerce.repo';

interface EcommerceType {
  enType?: string | null;
  arType?: string | null;
  baseUrl?: string | null;
}

export const buildPosParams = (obj: EcommerceType = {}): EcommerceType => {
  return {
    enType: obj.enType || name.title(),
    arType: obj.arType || name.title(),
    baseUrl: obj.baseUrl || internet.url(),
  };
};

export const ecommerceFactory = async (obj: EcommerceType = {}) => {
  const params: EcommerceType = buildPosParams(obj);
  return await ecommerceTestRepo().save({
    ...params,
  });
};
