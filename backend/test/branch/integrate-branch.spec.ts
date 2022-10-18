import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { adminFactory } from '../admin/admin.factory';
import { branchFactory } from './branch.factory';
import { merchantFactory } from '../merchant/factories/merchant.factory';
import { INTEGRATE_BRANCH } from '../endpoints/branch.endopints';
import { posFactory } from '../pos/pos.factory';
describe('integrate branch suite case', () => {
  it('should integrate branch when the merchant has a brand key', async () => {
    const admin = await adminFactory();
    const pos = await posFactory({ title: 'Marn' });
    const merchant = await merchantFactory({
      // realistic test branKey don't change
      brandKey: '931a90e8-e0cf-4f79-906d-9757dcf37518',
      pos,
    });
    const branch = await branchFactory({ merchant });
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.POST,
      url: INTEGRATE_BRANCH,
      variables: {
        id: branch.id,
        posBranch: 1,
      },
      token: admin.token,
    });
    // realistic test branKey don't change
    expect(response.body.brandKey).toBe('POS-NSHMMG-SA-4089-1261');
  });

  it("should integrate branch when the merchant doesn't have a brand key through brand key input", async () => {
    const admin = await adminFactory();
    const pos = await posFactory({ title: 'Marn' });
    const merchant = await merchantFactory({ brandKey: '', pos });
    const branch = await branchFactory({ merchant });
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.POST,
      url: INTEGRATE_BRANCH,
      variables: {
        id: branch.id,
        // realistic test branKey don't change
        brandKey: '931a90e8-e0cf-4f79-906d-9757dcf37518',
        posBranch: 1,
      },
      token: admin.token,
    });
    // realistic test branKey don't change
    expect(response.body.brandKey).toBe('POS-NSHMMG-SA-4089-1261');
  });

  it("should throw error when no brand key input and merchant doesn't have a brand key", async () => {
    const admin = await adminFactory();
    const merchant = await merchantFactory({ brandKey: '' });
    const branch = await branchFactory({ merchant });
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.POST,
      url: INTEGRATE_BRANCH,
      variables: {
        id: branch.id,
        posBranch: 1,
      },
      token: admin.token,
    });
    expect(response.body.statusCode).toBe(602);
  });
});
