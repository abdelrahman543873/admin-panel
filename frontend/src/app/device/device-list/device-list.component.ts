import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeviceInterface } from '../device.interface';
import { DeviceService } from '../device.service';
import { PosBranchListComponent } from '../../pos/pos-branch-list/pos-branch-list.component';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
})
export class DeviceListComponent implements OnInit {
  branchId!: number;
  devices!: DeviceInterface[];
  paginationLimit: number = 5;
  totalNumberOfDevices!: number;
  currentPage = 1;
  constructor(
    activatedRoute: ActivatedRoute,
    private readonly deviceService: DeviceService,
    private modalService: NgbModal,
  ) {
    this.branchId = +activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.paginate(this.paginationLimit);
  }

  open(deviceId: number) {
    const modalRef = this.modalService.open(PosBranchListComponent, {
      animation: true,
      size: 'lg',
    });
    modalRef.componentInstance.branchId = this.branchId;
    modalRef.componentInstance.deviceId = deviceId;
  }

  paginate(limit: number, offset: number = 1) {
    this.paginationLimit = limit;
    this.deviceService
      .searchDevices({ limit, offset, branchId: this.branchId })
      .subscribe((data) => {
        this.devices = data.items;
        this.totalNumberOfDevices = data.meta.totalItems;
      });
  }
}
