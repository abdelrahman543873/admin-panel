import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { adminFactory } from '../admin/admin.factory';
import { posFactory } from './pos.factory';
import { POS } from '../endpoints/pos.endpoints';
describe('get posses suite case', () => {
  it('should get poses', async () => {
    const admin = await adminFactory();
    await posFactory();
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.GET,
      url: POS,
      token: admin.token,
    });
    expect(response.body.items.length).toBeGreaterThanOrEqual(5);
  });
});
