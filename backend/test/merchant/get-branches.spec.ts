import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { BRANCH } from '../endpoints/merchant.endpoints';
import { adminFactory } from '../admin/admin.factory';
import { branchFactory } from './factories/branch.factory';
describe('branch suite case', () => {
  it('should get branches', async () => {
    const admin = await adminFactory();
    await branchFactory();
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.GET,
      url: BRANCH,
      token: admin.token,
    });
    expect(response.body.length).toBeGreaterThanOrEqual(1);
  });
});
