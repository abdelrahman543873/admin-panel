import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MerchantService } from '../../merchant/merchant.service';
import { AddBranchComponent } from '../add-branch/add-branch.component';
import { BranchInterface } from '../intefaces/branch.interface';
import { PaginationInterface } from 'src/app/shared/interfaces/pagination.interface';
import { dateMapper } from '../../shared/utils/date-mapper.util';

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
      .subscribe(this.renderData);
  }

  open() {
    const modalRef = this.modalService.open(AddBranchComponent, {
      animation: true,
    });
    modalRef.componentInstance.merchantId = this.merchantId;
    modalRef.componentInstance.branchAdded.subscribe(() => {
      this.paginate(this.paginationLimit);
    });
  }

  searchMerchants(enName: string) {
    this.merchantService
      .searchMerchantBranches({ merchantId: this.merchantId, enName })
      .subscribe(this.renderData);
  }

  renderData = (data: PaginationInterface<BranchInterface>) => {
    this.branches = data.items.map(dateMapper);
    this.totalNumberOfBranches = data.meta.totalItems;
  };
}
