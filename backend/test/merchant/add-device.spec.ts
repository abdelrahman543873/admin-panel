import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { DEVICE } from '../endpoints/merchant.endpoints';
import { adminFactory } from '../admin/admin.factory';
import { datatype } from 'faker';
import { buildDeviceParams } from './factories/device.factory';
describe('device suite case', () => {
  it('should add device', async () => {
    const admin = await adminFactory();
    const deviceParams = await buildDeviceParams();
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.POST,
      url: DEVICE,
      variables: { branch: deviceParams.branch },
      token: admin.token,
    });
    expect(response.body.branch).toBe(deviceParams.branch);
  });

  it("should throw error if branch doesn't exist", async () => {
    const admin = await adminFactory();
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.POST,
      url: DEVICE,
      variables: { branch: datatype.number() },
      token: admin.token,
    });
    expect(response.body.statusCode).toBe(400);
  });
});
