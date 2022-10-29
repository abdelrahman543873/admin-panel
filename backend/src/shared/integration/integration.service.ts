import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ApplicationException } from '../error/application.exception';
import { MarnDevicesResponse, MarnResponse } from './interfaces/marn.interface';
import { IntegrationLinks } from './integration.enum';
import { RatmResponse } from './interfaces/ratm.interface';

@Injectable()
export class IntegrationService {
  constructor(private httpsService: HttpService) {}
  integrations = {
    // this is bound to allow the passing of the http service dependency
    // httpService is undefined if this binding is removed
    Marn: {
      branch: this.fetchMarnLocationBrandKeys.bind(this),
      device: this.fetchMarnDeviceBrandKeys.bind(this),
    },
    Ratm: {
      branch: this.fetchRatmBranches.bind(this),
      device: this.fetchRatmDevices.bind(this),
    },
  };

  async fetchMarnLocationBrandKeys(BrandKey: string) {
    try {
      const marnResponse = await this.httpsService.axiosRef.get<MarnResponse>(
        IntegrationLinks.Marn.Location,
        {
          headers: {
            Authorization: `Bearer ${process.env.MARN_TOKEN}`,
            BrandKey,
          },
        },
      );
      if (!marnResponse.data.Locations.length) {
        throw new ApplicationException(601);
      }
      return marnResponse.data.Locations;
    } catch (error) {
      throw new ApplicationException(609);
    }
  }

  async fetchMarnDeviceBrandKeys(BrandKey: string) {
    try {
      const marnResponse =
        await this.httpsService.axiosRef.get<MarnDevicesResponse>(
          IntegrationLinks.Marn.Device,
          {
            headers: {
              Authorization: `Bearer ${process.env.MARN_TOKEN}`,
              BrandKey,
            },
          },
        );
      if (!marnResponse.data.DevicesData.length) {
        throw new ApplicationException(601);
      }
      return marnResponse.data.DevicesData;
    } catch (error) {
      throw new ApplicationException(609);
    }
  }

  async fetchRatmBranches(authToken: string) {
    try {
      const ratmResponse = await this.httpsService.axiosRef.get<RatmResponse>(
        IntegrationLinks.Ratm.Location,
        {
          headers: {
            auth: `${authToken}`,
          },
        },
      );
      if (!ratmResponse.data.data.length) {
        throw new ApplicationException(601);
      }
      return ratmResponse.data.data;
    } catch (error) {
      throw new ApplicationException(608);
    }
  }

  async fetchRatmDevices(authToken: string) {
    try {
      const ratmResponse = await firstValueFrom(
        this.httpsService.get<RatmResponse>(IntegrationLinks.Ratm.Device, {
          headers: {
            auth: `${authToken}`,
          },
        }),
      );
      if (!ratmResponse.data.data.length) {
        throw new ApplicationException(601);
      }
      return ratmResponse.data.data;
    } catch (error) {
      throw new ApplicationException(608);
    }
  }

  async fetchBranchBrandKeys(input: {
    pos: string;
    brandKey: string;
    resourceType: string;
  }) {
    if (!Object.keys(this.integrations).includes(input.pos))
      throw new ApplicationException(603);

    if (
      !Object.keys(this.integrations[input.pos]).includes(input.resourceType)
    ) {
      throw new ApplicationException(607);
    }
    return await this.integrations[input.pos][input.resourceType](
      input.brandKey,
    );
  }
}
