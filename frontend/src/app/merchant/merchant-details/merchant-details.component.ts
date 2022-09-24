import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MerchantModel } from '../interfaces/merchant.interface';
import { MerchantService } from '../merchant.service';
import { BranchModel } from '../interfaces/branch.interface';

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
  constructor(
    private merchantService: MerchantService,
    activatedRoute: ActivatedRoute,
  ) {
    this.merchantId = +activatedRoute.snapshot.params['id'];
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
