import { name } from 'faker';
import { merchantStatusTestRepo } from '../test-repos/merchant-satatus.test-repo';
interface MerchantStatusType {
  enTitle?: string;
}

export const buildMerchantStatusParams = (
  obj: MerchantStatusType = {},
): MerchantStatusType => {
  return {
    enTitle: obj.enTitle || name.title(),
  };
};

export const merchantStatusFactory = async (obj: MerchantStatusType = {}) => {
  const params: MerchantStatusType = buildMerchantStatusParams(obj);
  return await merchantStatusTestRepo().save({ ...params });
};
