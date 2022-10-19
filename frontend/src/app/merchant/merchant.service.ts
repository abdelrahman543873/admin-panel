import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddMerchantInput } from './dto/add-merchant.dto';
import { environment } from '../../environments/environment';
import { MerchantModel } from './interfaces/merchant.interface';
import { BranchInterface } from '../branch/intefaces/branch.interface';
import { PaginationInterface } from '../shared/interfaces/pagination.interface';
import { SearchBranchesDto } from './dto/search-branches.dto';
import { SearchMerchantsDto } from './dto/search-merchants.dto';
@Injectable({ providedIn: 'root' })
export class MerchantService {
  constructor(private readonly http: HttpClient) {}

  addMerchant(input: AddMerchantInput) {
    const uploadData = new FormData();
    Object.keys(input).forEach((key) => {
      if (key === 'file')
        uploadData.append('imageUrl', input.file, input.file.name);
      // @ts-ignore: Unreachable code error
      else uploadData.append(key, input[key]);
    });
    return this.http.post(`${environment.host}/merchant`, uploadData);
  }

  getMerchants(input: SearchMerchantsDto = {}) {
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
        },
      },
    );
  }
}
