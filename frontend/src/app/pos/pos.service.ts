import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PaginationDto } from '../shared/classes/pagination.dto';
import { PaginationInterface } from '../shared/interfaces/pagination.interface';
import { PosModel } from '../merchant/interfaces/pos.interface';
import { GetPosBranchesDto } from './inputs/get-pos-branches.dto';
import {
  MarnBranchInterface,
  MarnDeviceResponse,
} from './interfaces/marn.interface';
import { GetPosDevicesDto } from './inputs/get-pos-devices.interface';
import { RatmBranch, RatmDevice } from './interfaces/ratm.interface';

@Injectable({ providedIn: 'root' })
export class PosService {
  constructor(private readonly http: HttpClient) {}

  getPoses(input: PaginationDto) {
    return this.http.get<PaginationInterface<PosModel>>(
      `${environment.host}/pos`,
      {
        params: {
          ...input,
        },
      },
    );
  }

  getPosesBranches(input: GetPosBranchesDto) {
    return this.http.get<(MarnBranchInterface & RatmBranch)[]>(
      `${environment.host}/branch/pos`,
      {
        params: {
          ...input,
        },
      },
    );
  }

  getPosesDevices(input: GetPosDevicesDto) {
    return this.http.get<(MarnDeviceResponse & RatmDevice)[]>(
      `${environment.host}/device/pos`,
      {
        params: {
          ...input,
        },
      },
    );
  }
}