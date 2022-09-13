import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { DEVICES } from '../endpoints/merchant.endpoints';
import { adminFactory } from '../admin/admin.factory';
import { deviceFactory } from './factories/device.factory';
describe('get devices suite case', () => {
  it('should get devices', async () => {
    const admin = await adminFactory();
    const device = await deviceFactory();
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.GET,
      url: `${DEVICES}/${device.branch}`,
      token: admin.token,
    });
    expect(response.body.length).toBeGreaterThanOrEqual(1);
  });
});
