import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { adminFactory } from '../admin/admin.factory';
import { deviceFactory, buildDeviceParams } from './device.factory';
import { INTEGRATE_DEVICE } from '../endpoints/device.endpoints';
describe('integrate device suite case', () => {
  it('should integrate device', async () => {
    const admin = await adminFactory();
    const device = await deviceFactory();
    const deviceParams = await buildDeviceParams();
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.PUT,
      url: INTEGRATE_DEVICE,
      variables: {
        id: device.id,
        integrationId: deviceParams.integrationId,
        posDeviceName: deviceParams.posDeviceName,
      },
      token: admin.token,
    });
    expect(response.body.affected).toBe(1);
  });
});
