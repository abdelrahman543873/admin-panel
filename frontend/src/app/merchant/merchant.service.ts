import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddMerchantInput } from './dto/add-merchant.dto';

@Injectable({ providedIn: 'root' })
export class MerchantService {
  constructor(private readonly http: HttpClient) {}

  addMerchant(input: AddMerchantInput) {
    return this.http.post('http://localhost:3000/merchant', input);
  }
}
