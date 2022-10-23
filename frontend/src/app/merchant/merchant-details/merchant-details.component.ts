import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MerchantModel } from '../interfaces/merchant.interface';
import { MerchantService } from '../merchant.service';
import { UpdateMerchantComponent } from '../update-merchant/update-merchant.component';

@Component({
  selector: 'app-merchant-details',
  templateUrl: './merchant-details.component.html',
  styleUrls: ['./merchant-details.component.scss'],
})
export class MerchantDetailsComponent implements OnInit {
  merchant?: MerchantModel;
  merchantId: number;
  constructor(
    private merchantService: MerchantService,
    activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
  ) {
    this.merchantId = +activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.initializeMerchant();
  }

  editMerchant() {
    const updateMerchant = this.modalService.open(UpdateMerchantComponent, {
      animation: true,
      size: 'lg',
    });
    if (this.merchant) {
      Object.keys(this.merchant).forEach((merchantKey: string) => {
        updateMerchant.componentInstance[merchantKey] =
          // @ts-ignore: Unreachable code error
          this.merchant[merchantKey];
      });
    }
    updateMerchant.componentInstance.merchantUpdated.subscribe(() => {
      this.initializeMerchant();
    });
  }

  initializeMerchant() {
    this.merchantService.getMerchant(this.merchantId).subscribe((data) => {
      console.log(data);
      this.merchant = data;
    });
  }
}
