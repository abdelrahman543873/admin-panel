import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PaginationDto } from '../shared/dtos/pagination.dto';
import { PaginationInterface } from '../shared/interfaces/pagination.interface';
import { MerchantCategoryInterface } from './merchant-category.interface';

@Injectable({ providedIn: 'root' })
export class MerchantCategoryService {
  constructor(private readonly http: HttpClient) {}

  getCategories(input: PaginationDto) {
    return this.http.get<PaginationInterface<MerchantCategoryInterface>>(
      `${environment.host}/merchant-category`,
      {
        params: {
          ...input,
        },
      },
    );
  }
}
