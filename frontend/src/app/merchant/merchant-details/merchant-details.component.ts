import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MerchantModel } from '../interfaces/merchant.interface';
import { MerchantService } from '../merchant.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddBranchComponent } from '../../branch/add-branch/add-branch.component';
import { BranchInterface } from '../../branch/intefaces/branch.interface';

@Component({
  selector: 'app-merchant-details',
  templateUrl: './merchant-details.component.html',
  styleUrls: ['./merchant-details.component.scss'],
})
export class MerchantDetailsComponent implements OnInit {
  merchant?: MerchantModel;
  branches?: BranchInterface[];
  merchantId: number;
  nonExistingBranchSearch: boolean = false;
  constructor(
    private merchantService: MerchantService,
    activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
  ) {
    this.merchantId = +activatedRoute.snapshot.params['id'];
  }
  getMerchantBranches() {
    this.merchantService
      .getMerchantBranches(this.merchantId)
      .subscribe((data) => {
        this.branches = data.items;
        this.nonExistingBranchSearch = false;
      });
  }

  open() {
    const modalRef = this.modalService.open(AddBranchComponent, {
      animation: true,
    });
    modalRef.componentInstance.merchantId = this.merchantId;
    modalRef.componentInstance.branchAdded.subscribe(() => {
      this.getMerchantBranches();
    });
  }

  ngOnInit(): void {
    this.merchantService.getMerchant(this.merchantId).subscribe((data) => {
      this.merchant = data;
    });
    this.getMerchantBranches();
  }

  searchMerchants(branchName: string) {
    this.merchantService
      .searchMerchantBranches(this.merchantId, branchName)
      .subscribe((data) => {
        if (data.length) {
          this.branches = data;
          this.nonExistingBranchSearch = false;
        } else this.nonExistingBranchSearch = true;
      });
  }
}
