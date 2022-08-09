import { internet, name, random } from 'faker';
import { getValuesFromEnum } from '../../src/shared/utils/columnEnum';
import { POS_TYPE, MERCHANT_CATEGORY } from '../../src/merchant/merchant.enum';
import { Merchant } from '../../src/merchant/model/marchant.entity';
interface MerchantType {
  arName?: string;
  enName?: string;
  enSlogan?: string;
  arSlogan?: string;
  accountEmail?: string;
  brandKey?: string;
  logo?: string;
  posType?: string;
  category?: string;
  password?: string;
}

export const buildMerchantParams = (obj: MerchantType = {}): MerchantType => {
  return {
    arName: obj.arName || name.title(),
    enName: obj.enName || name.title(),
    password: obj.password || internet.password(),
    enSlogan: obj.enSlogan || name.title(),
    arSlogan: obj.arSlogan || name.title(),
    accountEmail: obj.accountEmail || internet.email(),
    brandKey: obj.brandKey || random.word(),
    logo: obj.logo || internet.url(),
    posType: obj.posType || random.arrayElement(getValuesFromEnum(POS_TYPE)),
    category:
      obj.category || random.arrayElement(getValuesFromEnum(MERCHANT_CATEGORY)),
  };
};

export const merchantFactory = async (obj: MerchantType = {}) => {
  const params: MerchantType = buildMerchantParams(obj);
  return await Merchant.create({ ...params });
};
