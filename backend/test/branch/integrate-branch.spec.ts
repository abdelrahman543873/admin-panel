import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { adminFactory } from '../admin/admin.factory';
import { branchFactory, buildBranchParams } from './branch.factory';
import { INTEGRATE_BRANCH } from '../endpoints/branch.endopints';
describe('integrate branch suite case', () => {
  it('should integrate branch', async () => {
    const admin = await adminFactory();
    const branch = await branchFactory({});
    const branchParams = await buildBranchParams();
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.PUT,
      url: INTEGRATE_BRANCH,
      variables: {
        id: branch.id,
        brandKey: branchParams.brandKey,
      },
      token: admin.token,
    });
    expect(response.body.affected).toBe(1);
  });
});
