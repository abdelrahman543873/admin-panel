import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MerchantService } from '../../merchant/merchant.service';
import { AddBranchComponent } from '../add-branch/add-branch.component';
import { BranchInterface } from '../intefaces/branch.interface';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.scss'],
})
export class BranchListComponent implements OnInit {
  constructor(
    private merchantService: MerchantService,
    private modalService: NgbModal,
  ) {}
  branches?: BranchInterface[];
  @Input() merchantId!: number;
  nonExistingBranchSearch: boolean = false;
  ngOnInit(): void {
    this.getMerchantBranches();
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
