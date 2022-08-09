import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { buildMerchantParams } from './merchant.factory';
import { MERCHANT } from '../endpoints/merchant.endpoints';
describe('merchant suite case', () => {
  it('should add merchant', async () => {
    const merchantParams = buildMerchantParams();
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.POST,
      url: MERCHANT,
      variables: merchantParams,
    });
    expect(response.body.arName).toBe(merchantParams.arName);
    expect(response.body.enName).toBe(merchantParams.enName);
  });
});
