import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ApplicationException } from '../error/application.exception';
import { MarnDevicesResponse, MarnResponse } from './interfaces/marn.interface';
import { IntegrationLinks } from './integration.enum';

@Injectable()
export class IntegrationService {
  constructor(private httpsService: HttpService) {}

  async fetchMarnLocationBrandKeys(brandKey: string) {
    const marnResponse = await firstValueFrom(
      this.httpsService.get<MarnResponse>(IntegrationLinks.Marn.Location, {
        headers: {
          Authorization: `Bearer ${process.env.MARN_TOKEN}`,
          BrandKey: brandKey,
        },
      }),
    );
    if (!marnResponse.data.Locations.length) {
      throw new ApplicationException(601);
    }
    return marnResponse.data.Locations;
  }

  async fetchMarnDeviceBrandKeys(brandKey: string) {
    const marnResponse = await firstValueFrom(
      this.httpsService.get<MarnDevicesResponse>(IntegrationLinks.Marn.Device, {
        headers: {
          Authorization: `Bearer ${process.env.MARN_TOKEN}`,
          BrandKey: brandKey,
        },
      }),
    );
    if (!marnResponse.data.DevicesData.length) {
      throw new ApplicationException(601);
    }
    return marnResponse.data.DevicesData;
  }

  async fetchBranchBrandKeys(input: {
    pos: string;
    brandKey: string;
    resourceType: string;
  }) {
    const integrations = {
      Marn: {
        branch: this.fetchMarnLocationBrandKeys(input.brandKey),
        device: this.fetchMarnDeviceBrandKeys(input.brandKey),
      },
    };
    if (!Object.keys(integrations).includes(input.pos))
      throw new ApplicationException(603);

    if (!Object.keys(integrations[input.pos]).includes(input.resourceType)) {
      throw new ApplicationException(607);
    }
    return integrations[input.pos][input.resourceType];
  }
}
