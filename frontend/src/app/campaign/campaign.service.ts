import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CampaignInterface } from './interfaces/campaign.interface';
import { SearchBranchesDto } from './inputs/search-branches.dto';
import { PaginationInterface } from '../shared/interfaces/pagination.interface';

@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  constructor(private readonly http: HttpClient) {}

  searchCampaigns(input: SearchBranchesDto) {
    return this.http.get<PaginationInterface<CampaignInterface>>(
      `${environment.host}/campaign/search`,
      {
        params: {
          ...(input.merchantId && { merchantId: input.merchantId }),
          ...(input.enTitle && { enTitle: input.enTitle }),
        },
      },
    );
  }
}
