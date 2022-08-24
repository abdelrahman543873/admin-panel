import { BRANCH } from './../endpoints/merchant.endpoints';
import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { adminFactory } from '../admin/admin.factory';
import { branchFactory } from './factories/branch.factory';
describe('get branch suite case', () => {
  it('should get branch', async () => {
    const admin = await adminFactory();
    const branch = await branchFactory();
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.GET,
      url: `${BRANCH}/${branch.id}`,
      token: admin.token,
    });
    expect(response.body.arName).toBe(branch.arName);
  });
});
