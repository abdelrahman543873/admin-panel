import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { buildMerchantParams } from './factories/merchant.factory';
import { MERCHANT } from '../endpoints/merchant.endpoints';
import { adminFactory } from '../admin/admin.factory';
describe('merchant suite case', () => {
  it('should add merchant', async () => {
    const admin = await adminFactory();
    const merchantParams = await buildMerchantParams();
    const testFiles = process.cwd();
    const filePath = `${testFiles}/test/test-files/test-duck.jpeg`;
    const { token, integrationId, subscriptionStatus, ...filteredParams } =
      merchantParams;
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.POST,
      url: MERCHANT,
      variables: { ...filteredParams, pos: merchantParams.pos.id },
      token: admin.token,
      filePath,
      fileParam: 'imageUrl',
    });
    expect(response.body.imageUrl).toContain('jpeg');
    expect(response.body.arName).toBe(merchantParams.arName);
    expect(response.body.enName).toBe(merchantParams.enName);
  });

  it('should throw error when non existing pos', async () => {
    const admin = await adminFactory();
    const merchantParams = await buildMerchantParams();
    const { token, integrationId, subscriptionStatus, ...filteredParams } =
      merchantParams;
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.POST,
      url: MERCHANT,
      variables: { ...filteredParams, pos: 1234556 },
      token: admin.token,
    });
    expect(response.body.statusCode).toBe(400);
    expect(response.body.message[0]).toContain('pos');
  });
});
