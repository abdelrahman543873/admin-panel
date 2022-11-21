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
    expect(response.body.items.length).toBeGreaterThanOrEqual(1);
  });

  it('should get active poses only', async () => {
    const admin = await adminFactory();
    await posFactory({ status: { id: 1, enTitle: 'active' } });
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.GET,
      url: `${POS}?activated=true`,
      token: admin.token,
    });
    const inActivePosses = response.body.items.filter((pos) => {
      return pos.status.id === 2;
    });
    expect(inActivePosses.length).toBe(0);
    expect(response.body.items.length).toBeGreaterThanOrEqual(1);
  });

  it('should get inActive poses only', async () => {
    const admin = await adminFactory();
    await posFactory({ status: { id: 2, enTitle: 'inactive' } });
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.GET,
      url: `${POS}?activated=false`,
      token: admin.token,
    });
    const activePosses = response.body.items.filter((pos) => {
      return pos.status.id === 1;
    });
    expect(activePosses.length).toBe(0);
    expect(response.body.items.length).toBeGreaterThanOrEqual(1);
  });
});
