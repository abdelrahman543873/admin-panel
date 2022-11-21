import { name } from 'faker';
import { merchantStatusTestRepo } from '../test-repos/merchant-satatus.test-repo';
interface MerchantStatusType {
  id?: number;
  enTitle?: string;
}

export const buildMerchantStatusParams = (
  obj: MerchantStatusType = { id: 1 },
): MerchantStatusType => {
  return {
    id: obj.id,
    enTitle: obj.enTitle || name.title(),
  };
};

export const merchantStatusFactory = async (
  obj: MerchantStatusType = { id: 1 },
) => {
  const params: MerchantStatusType = buildMerchantStatusParams(obj);
  await merchantStatusTestRepo().upsert(
    { id: params.id, enTitle: params.enTitle },
    ['id'],
  );
  return await merchantStatusTestRepo().findOne({ where: { id: params.id } });
};
