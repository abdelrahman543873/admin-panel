import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { adminFactory } from '../admin/admin.factory';
import { deviceFactory } from './device.factory';
import { SEARCH_DEVICES } from '../endpoints/device.endpoints';
describe('get devices suite case', () => {
  it('should get devices', async () => {
    const admin = await adminFactory();
    const device = await deviceFactory();
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.GET,
      url: `${SEARCH_DEVICES}?branchId=${device.branch.id}`,
      token: admin.token,
    });
    expect(response.body.length).toBeGreaterThanOrEqual(1);
  });
});
