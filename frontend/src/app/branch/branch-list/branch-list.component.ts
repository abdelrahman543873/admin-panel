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
  existingCampaigns: boolean = true;
  paginationLimit: number = 5;
  totalNumberOfBranches!: number;
  currentPage = 1;
  branches?: BranchInterface[];
  @Input() merchantId!: number;
  nonExistingBranchSearch: boolean = false;

  constructor(
    private merchantService: MerchantService,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    this.paginate(5);
  }

  paginate(limit: number, offset: number = 1) {
    this.paginationLimit = limit;
    this.merchantService
      .searchMerchantBranches({ limit, offset, merchantId: this.merchantId })
      .subscribe((data) => {
        this.branches = data.items;
        this.totalNumberOfBranches = data.meta.totalItems;
      });
  }

  open() {
    const modalRef = this.modalService.open(AddBranchComponent, {
      animation: true,
    });
    modalRef.componentInstance.merchantId = this.merchantId;
  }

  searchMerchants(enName: string) {
    this.merchantService
      .searchMerchantBranches({ merchantId: this.merchantId, enName })
      .subscribe((data) => {
        if (data.items.length) {
          this.branches = data.items;
          this.nonExistingBranchSearch = false;
        } else this.nonExistingBranchSearch = true;
      });
  }
}
