import { Component, OnInit } from '@angular/core';
import { BranchService } from '../branch.service';
import { MerchantModel } from '../../merchant/interfaces/merchant.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-branch-details',
  templateUrl: './branch-details.component.html',
  styleUrls: ['./branch-details.component.scss'],
})
export class BranchDetailsComponent implements OnInit {
  merchant?: MerchantModel;
  branchId!: number;
  constructor(
    private branchService: BranchService,
    activatedRoute: ActivatedRoute,
  ) {
    this.branchId = +activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.branchService.getBranch({ id: this.branchId }).subscribe((branch) => {
      this.merchant = branch.merchant;
    });
  }
}
