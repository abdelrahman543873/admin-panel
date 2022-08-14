import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { BRANCH } from '../endpoints/merchant.endpoints';
import { adminFactory } from '../admin/admin.factory';
import { buildBranchParams } from './factories/branch.factory';
import { datatype } from 'faker';
describe('branch suite case', () => {
  it('should add branch', async () => {
    const admin = await adminFactory();
    const branchParams = await buildBranchParams();
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.POST,
      url: BRANCH,
      variables: branchParams,
      token: admin.token,
    });
    expect(response.body.arName).toBe(branchParams.arName);
  });

  it("should throw error if branch doesn't exist", async () => {
    const admin = await adminFactory();
    const branchParams = await buildBranchParams();
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.POST,
      url: BRANCH,
      variables: { ...branchParams, merchant: datatype.number() },
      token: admin.token,
    });
    expect(response.body.statusCode).toBe(400);
  });
});
