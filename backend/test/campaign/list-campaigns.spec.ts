import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { adminFactory } from '../admin/admin.factory';
import { campaignFactory } from './campaign.factory';
import { CAMPAIGN } from '../endpoints/campaign.endpoints';
describe('list campaigns suite case', () => {
  it('should get campaign list', async () => {
    const admin = await adminFactory();
    const campaign = await campaignFactory();
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.GET,
      url: `${CAMPAIGN}/${campaign.idMerchant.id}`,
      token: admin.token,
    });
    expect(response.body[0].idMerchant.id).toBe(campaign.idMerchant.id);
  });
});
