import { merchantFactory } from './factories/merchant.factory';
import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { MERCHANT } from '../endpoints/merchant.endpoints';
import { adminFactory } from '../admin/admin.factory';
describe('get merchants suite case', () => {
  it('should get merchants', async () => {
    const admin = await adminFactory();
    await merchantFactory();
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.GET,
      url: MERCHANT,
      token: admin.token,
    });
    expect(response.body.items.length).toBeGreaterThanOrEqual(1);
    expect(response.body.items[0]).toHaveProperty('arName');
    expect(response.body.items[0].pos).toHaveProperty('id');
  });
});
