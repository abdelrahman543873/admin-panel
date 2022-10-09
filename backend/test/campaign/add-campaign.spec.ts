import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { adminFactory } from '../admin/admin.factory';
import { buildCampaignParams } from './factories/campaign.factory';
import { CAMPAIGN } from '../endpoints/campaign.endpoints';
describe('add campaign suite case', () => {
  it('should add campaign', async () => {
    const admin = await adminFactory();
    const { type, logo, status, merchant, ...campaign } =
      await buildCampaignParams();
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.POST,
      url: CAMPAIGN,
      token: admin.token,
      variables: {
        ...campaign,
        merchantId: merchant.id,
      },
    });
    expect(response.body).toHaveProperty('id');
    expect(response.body.merchant.id).toBe(merchant.id);
    expect(response.body.enTitle).toBe(campaign.enTitle);
  });
});
