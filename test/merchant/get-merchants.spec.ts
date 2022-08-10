import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { merchantFactory } from './merchant.factory';
import { MERCHANT } from '../endpoints/merchant.endpoints';
describe('get merchants suite case', () => {
  it('should get merchants', async () => {
    await merchantFactory();
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.GET,
      url: MERCHANT,
    });
    expect(response.body.length).toBeGreaterThanOrEqual(1);
    expect(response.body[0]).toHaveProperty('arName');
  });
});
