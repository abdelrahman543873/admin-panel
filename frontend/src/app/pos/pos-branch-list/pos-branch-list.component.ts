import { Component, Input, OnInit } from '@angular/core';
import {
  MarnBranchInterface,
  MarnDeviceResponse,
} from '../interfaces/marn.interface';
import { PosService } from '../pos.service';
import { BranchService } from '../../branch/branch.service';
import { DeviceService } from '../../device/device.service';
import { ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-pos-branch-list',
  templateUrl: './pos-branch-list.component.html',
  styleUrls: ['./pos-branch-list.component.scss'],
})
export class PosBranchListComponent implements OnInit {
  posBranches!: MarnBranchInterface[];
  posDevices!: MarnDeviceResponse[];
  @Input() branchId!: number;
  @Input() deviceId!: number;
  constructor(
    private posService: PosService,
    private branchService: BranchService,
    private deviceService: DeviceService,
    private toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.posService
      .getPosesBranches({ branchId: this.branchId })
      .subscribe((data) => {
        this.posBranches = data;
      });
    this.posService
      .getPosesDevices({ deviceId: this.deviceId })
      .subscribe((data) => {
        this.posDevices = data;
      });
  }

  integrate(input: { brandKey: string; integrationId: number }) {
    this.branchService
      .integrateBranch({
        id: this.branchId,
        brandKey: input.brandKey,
      })
      .subscribe({
        next: (data) => {
          this.deviceService
            .integrateDevice({
              id: this.deviceId,
              integrationId: `${input.integrationId}`,
            })
            .subscribe((data) => {
              this.showSuccess('device integrate successfully');
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
