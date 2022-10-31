import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../merchant.service';
import { MerchantModel } from '../interfaces/merchant.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddMerchantComponent } from '../add/add-merchant.component';
import { IntegrationType } from '../merchant.constants';

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
  integrationType: IntegrationType = IntegrationType.ALL_MERCHANTS;

  constructor(
    private merchantService: MerchantService,
    private modalService: NgbModal,
  ) {}

  handleNewPagination = (data: any) => {
    this.merchants = data.items;
    this.totalNumberOfMerchants = data.meta.totalItems;
  };

  ngOnInit(): void {
    this.merchantService.getMerchants().subscribe(this.handleNewPagination);
  }

  open() {
    this.modalService.open(AddMerchantComponent, {
      animation: true,
      size: 'lg',
    });
  }

  paginate(
    limit: number = this.paginationLimit,
    offset: number = this.currentPage,
  ) {
    this.integrationType = IntegrationType.ALL_MERCHANTS;
    this.merchantService
      .getMerchants({ limit, offset })
      .subscribe(this.handleNewPagination);
  }

  movePage(
    limit: number = this.paginationLimit,
    offset: number = this.currentPage,
  ) {
    switch (this.integrationType) {
      case IntegrationType.ALL_MERCHANTS:
        this.paginate(limit, offset);
        break;
      case IntegrationType.ECOM:
        this.getEcomMerchants(offset);
        break;
      case IntegrationType.INSTORE:
        this.getInstoreMerchants(offset);
        break;
    }
  }

  getEcomMerchants(offset: number = this.currentPage) {
    this.currentPage = offset;
    this.integrationType = IntegrationType.ECOM;
    this.merchantService
      .getEcomMerchants({ limit: this.paginationLimit, offset })
      .subscribe(this.handleNewPagination);
  }

  getInstoreMerchants(offset: number = this.currentPage) {
    this.currentPage = offset;
    this.integrationType = IntegrationType.INSTORE;
    this.merchantService
      .getInstoreMerchants({ limit: this.paginationLimit, offset })
      .subscribe(this.handleNewPagination);
  }

  searchMerchants(enName: string) {
    this.merchantService
      .getMerchants({
        limit: this.paginationLimit,
        offset: this.currentPage,
        enName,
      })
      .subscribe(this.handleNewPagination);
  }
}
