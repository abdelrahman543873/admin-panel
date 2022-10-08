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
  paginationLimit: number = 15;
  currentPage = 1;
  totalNumberOfMerchants!: number;
  constructor(private merchantService: MerchantService) {}

  ngOnInit(): void {
    this.merchantService.getMerchants().subscribe((data) => {
      this.merchants = data.items;
      this.totalNumberOfMerchants = data.meta.totalItems;
    });
  }

  paginate(limit: number, offset: number = 1) {
    this.paginationLimit = limit;
    this.merchantService.getMerchants({ limit, offset }).subscribe((data) => {
      this.merchants = data.items;
    });
  }
}
