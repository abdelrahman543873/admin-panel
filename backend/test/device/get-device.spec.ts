import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { adminFactory } from '../admin/admin.factory';
import { DEVICE } from '../endpoints/device.endpoints';
import { deviceFactory } from './device.factory';
describe('device suite case', () => {
  it('should get device', async () => {
    const admin = await adminFactory();
    const device = await deviceFactory();
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.GET,
      url: `${DEVICE}/${device.id}`,
      token: admin.token,
    });
    expect(response.body.activationCode).toBe(device.activationCode);
    expect(response.body.branch.id).toBe(device.branch.id);
  });
});