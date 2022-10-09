import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddMerchantInput } from './dto/add-merchant.dto';
import { environment } from '../../environments/environment';
import { MerchantModel } from './interfaces/merchant.interface';
import { BranchInterface } from '../branch/intefaces/branch.interface';
import { PaginationInterface } from '../shared/interfaces/pagination.interface';
import { PaginationDto } from '../shared/classes/pagination.dto';
import { SearchBranchesDto } from './dto/search-branches.dto';
@Injectable({ providedIn: 'root' })
export class MerchantService {
  constructor(private readonly http: HttpClient) {}

  addMerchant(input: AddMerchantInput) {
    return this.http.post(`${environment.host}/merchant`, input);
  }

  getMerchants(input: PaginationDto = {}) {
    return this.http.get<PaginationInterface<MerchantModel>>(
      `${environment.host}/merchant`,
      { params: { ...input } },
    );
  }

  getMerchant(id: number) {
    return this.http.get<MerchantModel>(`${environment.host}/merchant/${id}`);
  }

  searchMerchantBranches(input: SearchBranchesDto) {
    return this.http.get<PaginationInterface<BranchInterface>>(
      `${environment.host}/branch/search`,
      {
        params: {
          ...input,
          ...(input.name && { enTitle: input.name }),
        },
      },
    );
  }
}
