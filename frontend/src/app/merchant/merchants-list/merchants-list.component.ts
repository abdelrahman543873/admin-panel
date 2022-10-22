import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../merchant.service';
import { MerchantModel } from '../interfaces/merchant.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddMerchantComponent } from '../add/add-merchant.component';

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
  constructor(
    private merchantService: MerchantService,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    this.merchantService.getMerchants().subscribe((data) => {
      this.merchants = data.items;
      this.totalNumberOfMerchants = data.meta.totalItems;
    });
  }

  open() {
    this.modalService.open(AddMerchantComponent, {
      animation: true,
    });
  }

  paginate(limit: number, offset: number = 1) {
    this.paginationLimit = limit;
    this.merchantService.getMerchants({ limit, offset }).subscribe((data) => {
      this.merchants = data.items;
      this.totalNumberOfMerchants = data.meta.totalItems;
    });
  }

  searchMerchants(enName: string) {
    this.merchantService
      .getMerchants({
        limit: this.paginationLimit,
        offset: this.currentPage,
        enName,
      })
      .subscribe((data) => {
        this.merchants = data.items;
        this.totalNumberOfMerchants = data.meta.totalItems;
      });
  }
}
