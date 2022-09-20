import { SEARCH_BRANCHES } from './../endpoints/merchant.endpoints';
import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { adminFactory } from '../admin/admin.factory';
import { branchFactory } from './factories/branch.factory';
describe('search branches suite case', () => {
  it('should search branches', async () => {
    const admin = await adminFactory();
    const branch = await branchFactory();
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.GET,
      url: `${SEARCH_BRANCHES}?id=${branch.merchant.id}&name=${branch.enName}`,
      token: admin.token,
    });
    expect(response.body.length).toBeGreaterThanOrEqual(1);
    expect(response.body[0].enName).toBe(branch.enName)
  });
});
