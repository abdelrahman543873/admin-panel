import { BRANCH } from './../endpoints/branch.endopints';
import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { adminFactory } from '../admin/admin.factory';
import { buildBranchParams } from './branch.factory';
import { datatype } from 'faker';
describe('branch suite case', () => {
  it('should add branch', async () => {
    const admin = await adminFactory();
    const branchParams = await buildBranchParams();
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.POST,
      url: BRANCH,
      variables: {
        merchantId: branchParams.merchant.id,
        arName: branchParams.arName,
        enName: branchParams.enName,
        longitude: branchParams.longitude,
        latitude: branchParams.latitude,
      },
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
      variables: {
        arName: branchParams.arName,
        enName: branchParams.enName,
        longitude: branchParams.longitude,
        latitude: branchParams.latitude,
        merchantId: datatype.number(),
      },
      token: admin.token,
    });
    expect(response.body.statusCode).toBe(400);
    expect(response.body.message[0]).toContain('merchant');
  });
});
