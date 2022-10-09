import { CAMPAIGN_SEARCH } from '../endpoints/campaign.endpoints';
import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { adminFactory } from '../admin/admin.factory';
import { campaignFactory } from './factories/campaign.factory';
import { campaignImageFactory } from './factories/campaign-image.factory';
describe('search campaigns suite case', () => {
  it('should get campaign list', async () => {
    const admin = await adminFactory();
    const campaign = await campaignFactory();
    const image = await campaignImageFactory({ id: campaign });
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.GET,
      url: `${CAMPAIGN_SEARCH}?merchantId=${campaign.merchant.id}`,
      token: admin.token,
    });
    expect(response.body.items[0].merchant.id).toBe(campaign.merchant.id);
    expect(response.body.items[0].image.id).toBe(image.id);
  });

  it('should search campaign list with enTitle', async () => {
    const admin = await adminFactory();
    const campaign = await campaignFactory();
    const image = await campaignImageFactory({ id: campaign });
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.GET,
      url: `${CAMPAIGN_SEARCH}?enTitle=${campaign.enTitle}`,
      token: admin.token,
    });
    expect(response.body.items[0].image.id).toBe(image.id);
    expect(response.body.items[0].merchant.id).toBe(campaign.merchant.id);
  });
});
