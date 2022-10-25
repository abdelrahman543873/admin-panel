import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PaginationInterface } from '../shared/interfaces/pagination.interface';
import { DeviceInterface } from './device.interface';
import { SearchDevicesDto } from './inputs/search-devices.dto';
import { IntegrateDeviceDto } from './inputs/integrate-device.dto';

@Injectable({ providedIn: 'root' })
export class DeviceService {
  constructor(private readonly http: HttpClient) {}

  searchDevices(input: SearchDevicesDto) {
    return this.http.get<PaginationInterface<DeviceInterface>>(
      `${environment.host}/device/search`,
      {
        params: {
          ...input,
        },
      },
    );
  }

  integrateDevice(input: IntegrateDeviceDto) {
    return this.http.put<{ affected: number }>(
      `${environment.host}/device/integrate`,
      input,
    );
  }
}
