import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MerchantModel } from '../interfaces/merchant.interface';
import { MerchantService } from '../merchant.service';

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
  ) {
    this.merchantId = +activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.merchantService.getMerchant(this.merchantId).subscribe((data) => {
      this.merchant = data;
    });
  }
}
