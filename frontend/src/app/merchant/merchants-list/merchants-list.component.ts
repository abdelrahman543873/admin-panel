import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../merchant.service';
import { MerchantModel } from '../interfaces/merchant.interface';

@Component({
  selector: 'app-merchants-list',
  templateUrl: './merchants-list.component.html',
  styleUrls: ['./merchants-list.component.scss'],
})
export class MerchantsListComponent implements OnInit {
  merchants: MerchantModel[] = [];
  constructor(private merchantService: MerchantService) {}

  ngOnInit(): void {
    this.merchantService.getMerchants().subscribe((data) => {
      this.merchants = data;
    });
  }
}
