import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MerchantModel } from '../interfaces/merchant.interface';
import { MerchantService } from '../merchant.service';
import { BranchModel } from '../interfaces/branch.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddBranchModalComponent } from '../add-branch-modal/add-branch-modal.component';

@Component({
  selector: 'app-merchant-details',
  templateUrl: './merchant-details.component.html',
  styleUrls: ['./merchant-details.component.scss'],
})
export class MerchantDetailsComponent implements OnInit {
  merchant?: MerchantModel;
  branches?: BranchModel[];
  merchantId: number;
  nonExistingBranchSearch: boolean = false;
  closeResult = '';
  constructor(
    private merchantService: MerchantService,
    activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
  ) {
    this.merchantId = +activatedRoute.snapshot.params['id'];
  }

  open() {
    this.modalService.open(AddBranchModalComponent, { animation: true });
  }

  ngOnInit(): void {
    this.merchantService.getMerchant(this.merchantId).subscribe((data) => {
      this.merchant = data;
    });
    this.merchantService
      .getMerchantBranches(this.merchantId)
      .subscribe((data) => {
        this.branches = data;
        this.nonExistingBranchSearch = false;
      });
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
