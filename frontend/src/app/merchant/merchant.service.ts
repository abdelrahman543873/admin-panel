import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddMerchantInput } from './dto/add-merchant.dto';
import { environment } from '../../environments/environment';
import { MerchantModel } from './interfaces/merchant.interface';
import { BranchModel } from './interfaces/branch.interface';
@Injectable({ providedIn: 'root' })
export class MerchantService {
  constructor(private readonly http: HttpClient) {}

  addMerchant(input: AddMerchantInput) {
    return this.http.post(`${environment.host}/merchant`, input);
  }

  getMerchants() {
    return this.http.get<MerchantModel[]>(`${environment.host}/merchant`);
  }

  getMerchant(id: number) {
    return this.http.get<MerchantModel>(`${environment.host}/merchant/${id}`);
  }

  getMerchantBranches(merchant: number) {
    return this.http.get<BranchModel[]>(
      `${environment.host}/merchant/branches/${merchant}`,
    );
  }
}
