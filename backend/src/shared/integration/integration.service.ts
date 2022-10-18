import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ApplicationException } from '../error/application.exception';
import { MarnResponse } from './interfaces/marn.interface';
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
    return marnResponse.data;
  }
}
