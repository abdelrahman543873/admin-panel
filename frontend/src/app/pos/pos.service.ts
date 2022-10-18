import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PaginationDto } from '../shared/classes/pagination.dto';
import { PaginationInterface } from '../shared/interfaces/pagination.interface';
import { PosModel } from '../merchant/interfaces/pos.interface';

@Injectable({ providedIn: 'root' })
export class PosService {
  constructor(private readonly http: HttpClient) {}

  getPoses(input: PaginationDto) {
    return this.http.get<PaginationInterface<PosModel>>(`${environment.host}/pos`, {
      params: {
        ...input,
      },
    });
  }
}
