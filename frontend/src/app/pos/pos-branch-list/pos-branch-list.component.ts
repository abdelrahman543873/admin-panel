import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {
  MarnBranchInterface,
  MarnDeviceResponse,
} from '../interfaces/marn.interface';
import { PosService } from '../pos.service';
import { BranchService } from '../../branch/branch.service';
import { DeviceService } from '../../device/device.service';
import { ToastService } from '../../shared/components/toast/toast.service';
import { RatmBranch, RatmDevice } from '../interfaces/ratm.interface';

@Component({
  selector: 'app-pos-branch-list',
  templateUrl: './pos-branch-list.component.html',
  styleUrls: ['./pos-branch-list.component.scss'],
})
export class PosBranchListComponent implements OnInit {
  posBranches!: (MarnBranchInterface & RatmBranch)[];
  posDevices!: (MarnDeviceResponse & RatmDevice)[];
  @Input() branchId!: number;
  @Input() deviceId!: number;
  merchantId!: number;
  deviceIntegrated = new EventEmitter();
  unsupportedPos = new EventEmitter();
  constructor(
    private posService: PosService,
    private branchService: BranchService,
    private deviceService: DeviceService,
    private toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.posService.getPosesBranches({ branchId: this.branchId }).subscribe({
      next: (data) => {
        this.posBranches = data;
      },
      error: (data) => {
        this.showDanger(data.error.message);
        this.unsupportedPos.emit();
      },
    });
    this.posService.getPosesDevices({ deviceId: this.deviceId }).subscribe({
      next: (data) => {
        this.posDevices = data;
      },
      error: (data) => {
        this.showDanger(data.error.message);
        this.unsupportedPos.emit();
      },
    });
    this.branchService.getBranch({ id: this.branchId }).subscribe((data) => {
      this.merchantId = data.merchant.id;
    });
  }

  integrate(brandKey: string, integrationId: number, posDeviceName: string) {
    this.branchService
      .integrateBranch({
        id: this.branchId,
        brandKey,
      })
      .subscribe({
        next: (data) => {
          this.deviceService
            .integrateDevice({
              id: this.deviceId,
              integrationId: `${integrationId}`,
              posDeviceName,
            })
            .subscribe((data) => {
              this.showSuccess('device integrate successfully');
              this.deviceIntegrated.emit();
            });
        },
        error: (error) => {
          this.showDanger("device wasn't integrated");
        },
      });
  }

  showSuccess(message: string) {
    this.toastService.show(message, {
      classname: 'bg-success text-light',
      delay: 5000,
    });
  }

  showDanger(message: string) {
    this.toastService.show(message, {
      classname: 'bg-danger text-light',
      delay: 5000,
    });
  }
}
