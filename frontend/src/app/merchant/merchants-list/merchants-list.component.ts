import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../merchant.service';
import { MerchantModel } from '../interfaces/merchant.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddMerchantComponent } from '../add/add-merchant.component';
import { IntegrationType } from '../merchant.constants';
import { PaginationInterface } from 'src/app/shared/interfaces/pagination.interface';
import { dateMapper } from '../../shared/utils/date-mapper.util';

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
  integrationType: IntegrationType | string = IntegrationType.ALL_MERCHANTS;
  search?: string;

  constructor(
    private merchantService: MerchantService,
    private modalService: NgbModal,
  ) {}

  renderData = (data: PaginationInterface<MerchantModel>) => {
    this.merchants = data.items.map(dateMapper);
    this.totalNumberOfMerchants = data.meta.totalItems;
  };

  ngOnInit(): void {
    this.merchantService.getMerchants().subscribe(this.renderData);
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
    this.merchantService
      .getMerchants({ limit, offset })
      .subscribe(this.renderData);
  }

  clearSearch() {
    this.search = '';
    this.searchMerchants();
  }

  getEcomMerchants(offset: number = this.currentPage) {
    this.currentPage = offset;
    this.merchantService
      .getEcomMerchants({ limit: this.paginationLimit, offset })
      .subscribe(this.renderData);
  }

  getInstoreMerchants(offset: number = this.currentPage) {
    this.currentPage = offset;
    this.merchantService
      .getInstoreMerchants({ limit: this.paginationLimit, offset })
      .subscribe(this.renderData);
  }

  searchMerchants(
    limit: number = this.paginationLimit,
    offset: number = this.currentPage,
    enName = this.search,
  ) {
    this.search = enName;
    switch (this.integrationType) {
      case IntegrationType.ALL_MERCHANTS:
        this.merchantService
          .getMerchants({
            limit,
            offset,
            ...(enName && { enName }),
          })
          .subscribe(this.renderData);
        break;
      case IntegrationType.ECOM:
        this.merchantService
          .getEcomMerchants({
            limit,
            offset,
            ...(enName && { enName }),
          })
          .subscribe(this.renderData);
        break;
      case IntegrationType.INSTORE:
        this.merchantService
          .getInstoreMerchants({
            limit,
            offset,
            ...(enName && { enName }),
          })
          .subscribe(this.renderData);
        break;
    }
  }
}
