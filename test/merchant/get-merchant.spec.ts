import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { merchantFactory } from './merchant.factory';
import { MERCHANT } from '../endpoints/merchant.endpoints';
import { adminFactory } from '../admin/admin.factory';
describe('get merchant suite case', () => {
  it('should get merchant', async () => {
    const admin = await adminFactory();
    const merchant = await merchantFactory();
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.GET,
      url: `${MERCHANT}/${merchant.id}`,
      token: admin.token,
    });
    expect(response.body.pos.id).toBe(merchant.pos);
    expect(response.body.category.id).toBe(merchant.category);
    expect(response.body).not.toHaveProperty('password');
    expect(response.body.id).toBe(merchant.id);
  });
});
