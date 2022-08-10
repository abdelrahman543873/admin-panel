import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { merchantFactory } from './merchant.factory';
import { MERCHANT } from '../endpoints/merchant.endpoints';
describe('get merchant suite case', () => {
  it('should get merchant', async () => {
    const merchant = await merchantFactory();
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.GET,
      url: `${MERCHANT}/${merchant.id}`,
    });
    expect(response.body).not.toHaveProperty('password');
    expect(response.body.id).toBe(merchant.id);
  });
});
