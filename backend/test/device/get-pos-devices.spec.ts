import { POS_DEVICES } from './../endpoints/device.endpoints';
import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { adminFactory } from '../admin/admin.factory';
import { merchantFactory } from '../merchant/factories/merchant.factory';
import { posFactory } from '../pos/pos.factory';
import { branchFactory } from '../branch/branch.factory';
import { deviceFactory } from './device.factory';
describe('get pos branches suite case', () => {
  it('should get devices for marn POS', async () => {
    const admin = await adminFactory();
    const pos = await posFactory({ title: 'Marn' });
    const merchant = await merchantFactory({
      // realistic test branKey don't change
      brandKey: '931a90e8-e0cf-4f79-906d-9757dcf37518',
      pos,
    });
    const branch = await branchFactory({ merchant });
    const device = await deviceFactory({ branch });
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.GET,
      url: `${POS_DEVICES}?deviceId=${device.id}`,
      token: admin.token,
    });
    expect(response.body[0].DeviceID).toBe(1625);
  });

  it('should get devices when the merchant has a brand key RATM', async () => {
    const admin = await adminFactory();
    const pos = await posFactory({ title: 'Ratm' });
    const merchant = await merchantFactory({
      // realistic test branKey don't change
      brandKey: 'VaPX72InfUH9o0oZbWJiV2OViJcAEv',
      pos,
    });
    const branch = await branchFactory({ merchant });
    const device = await deviceFactory({ branch });
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.GET,
      url: `${POS_DEVICES}?deviceId=${device.id}`,
      token: admin.token,
    });
    // realistic test branKey don't change
    expect(response.body[0].name_ar).toBe('كاشير');
  });

  it("should throw error when no brand key input and merchant doesn't have a brand key", async () => {
    const admin = await adminFactory();
    const merchant = await merchantFactory({ brandKey: '' });
    const branch = await branchFactory({ merchant });
    const device = await deviceFactory({ branch });
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.GET,
      url: `${POS_DEVICES}?deviceId=${device.id}`,
      token: admin.token,
    });
    expect(response.body.statusCode).toBe(605);
  });
});
