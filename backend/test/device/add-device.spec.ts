import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { adminFactory } from '../admin/admin.factory';
import { datatype } from 'faker';
import { buildDeviceParams } from './device.factory';
import { DEVICE } from '../endpoints/device.endpoints';
describe('device suite case', () => {
  it('should add device', async () => {
    const admin = await adminFactory();
    const deviceParams = await buildDeviceParams();
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.POST,
      url: DEVICE,
      variables: { branchId: deviceParams.branch.id },
      token: admin.token,
    });
    expect(response.body.branch.id).toBe(deviceParams.branch.id);
  });

  it("should throw error if branch doesn't exist", async () => {
    const admin = await adminFactory();
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.POST,
      url: DEVICE,
      variables: { branchId: datatype.number() },
      token: admin.token,
    });
    expect(response.body.statusCode).toBe(400);
    expect(response.body.message[0]).toContain('branch');
  });
});
