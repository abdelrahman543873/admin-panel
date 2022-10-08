import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddMerchantInput } from './dto/add-merchant.dto';
import { environment } from '../../environments/environment';
import { MerchantModel } from './interfaces/merchant.interface';
import { BranchInterface } from '../branch/intefaces/branch.interface';
import { GetMerchantsDto } from './dto/search-merchants.dto';
import { PaginationInterface } from '../shared/interfaces/pagination.interface';
@Injectable({ providedIn: 'root' })
export class MerchantService {
  constructor(private readonly http: HttpClient) {}

  addMerchant(input: AddMerchantInput) {
    return this.http.post(`${environment.host}/merchant`, input);
  }

  getMerchants(input: GetMerchantsDto = {}) {
    return this.http.get<PaginationInterface<MerchantModel>>(
      `${environment.host}/merchant`,
      { params: { ...input } },
    );
  }

  getMerchant(id: number) {
    return this.http.get<MerchantModel>(`${environment.host}/merchant/${id}`);
  }

  getMerchantBranches(merchant: number) {
    return this.http.get<{ items: BranchInterface[] }>(
      `${environment.host}/branch/search?merchantId=${merchant}`,
    );
  }

  searchMerchantBranches(merchant: number, name: string) {
    return this.http.get<BranchInterface[]>(
      `${environment.host}/branch/search?merchantId=${merchant}&enName=${name}`,
    );
  }
}
