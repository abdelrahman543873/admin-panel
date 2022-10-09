import { name, internet, datatype, random } from 'faker';
import { campaignTypeTestRepo } from '../test-repos/campaign-type.repo';
import { CampaignType } from '../../../src/campaign/models/campaign-type.entity';

interface CampaignTypeType {
  enName?: string;
  arName?: string;
  icon?: string;
  iconSvg?: string;
  iconPdf?: string;
  useSteps?: string;
  useStepsAr?: string;
  termsAndConditions?: string;
  termsAndConditionsAr?: string;
  image?: string;
  htmlUseSteps?: string;
  htmlUseStepsAr?: string;
  htmlTermsAndConditions?: string;
  htmlTermsAndConditionsAr?: string;
}

export const buildCampaignParams = (obj: CampaignTypeType = {}) => {
  return {
    enName: obj.enName || name.title(),
    arName: obj.arName || name.title(),
    icon: obj.icon || name.title(),
    iconSvg: obj.iconSvg || name.title(),
    iconPdf: obj.iconPdf || name.title(),
    useSteps: obj.useSteps || name.title(),
    useStepsAr: obj.useStepsAr || name.title(),
    termsAndConditions: obj.termsAndConditions || name.title(),
    termsAndConditionsAr: obj.termsAndConditionsAr || name.title(),
    image: obj.image || name.title(),
    htmlUseSteps: obj.htmlUseSteps || name.title(),
    htmlUseStepsAr: obj.htmlUseStepsAr || name.title(),
    htmlTermsAndConditions: obj.htmlTermsAndConditions || name.title(),
    htmlTermsAndConditionsAr: obj.htmlTermsAndConditionsAr || name.title(),
  };
};

export const campaignTypeFactory = async (
  obj: CampaignTypeType = {},
): Promise<CampaignType> => {
  const params: CampaignTypeType = await buildCampaignParams(obj);
  return await campaignTypeTestRepo().save({
    ...params,
  });
};
