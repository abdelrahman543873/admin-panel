import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import {
  buildMerchantParams,
  merchantFactory,
} from './factories/merchant.factory';
import { MERCHANT } from '../endpoints/merchant.endpoints';
import { adminFactory } from '../admin/admin.factory';
import { merchantTestRepo } from './test-repos/merchant.test-repo';
describe('update merchant suite case', () => {
  it('should update merchant', async () => {
    const admin = await adminFactory();
    const updatedMerchant = await merchantFactory();
    const merchantParams = await buildMerchantParams();
    const testFiles = process.cwd();
    const filePath = `${testFiles}/test/test-files/test-duck.jpeg`;
    const {
      token,
      subscriptionStatus,
      ecommerceType,
      imageUrl,
      ...filteredParams
    } = merchantParams;
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.PUT,
      url: MERCHANT,
      variables: {
        id: updatedMerchant.id,
        ...filteredParams,
        pos: merchantParams.pos.id,
        category: merchantParams.category.id,
      },
      token: admin.token,
      filePath,
      fileParam: 'imageUrl',
    });
    expect(response.body.affected).toBe(1);
    const merchantAfterUpdate = await merchantTestRepo().findOne({
      where: {
        id: updatedMerchant.id,
      },
      relations: ['pos', 'category'],
    });
    expect(merchantAfterUpdate.imageUrl).toContain('jpeg');
    expect(merchantAfterUpdate.arName).toBe(merchantParams.arName);
    expect(merchantAfterUpdate.enName).toBe(merchantParams.enName);
    expect(merchantAfterUpdate.pos.id).toBe(merchantParams.pos.id);
    expect(merchantAfterUpdate.category.id).toBe(merchantParams.category.id);
  });
});
