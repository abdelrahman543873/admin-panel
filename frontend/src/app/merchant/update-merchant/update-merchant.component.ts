import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { MerchantService } from '../merchant.service';
import { MerchantCategoryService } from '../../merchant-category/merchant-category.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../shared/services/toast.service';
import { PosService } from '../../pos/pos.service';
import { NgForm } from '@angular/forms';
import { PosModel } from '../interfaces/pos.interface';
import { Ecommerce } from '../../ecommerce/commerce.interface';
@Component({
  selector: 'app-update-merchant',
  templateUrl: './update-merchant.component.html',
  styleUrls: ['./update-merchant.component.scss'],
})
export class UpdateMerchantComponent implements OnInit {
  merchantUpdated = new EventEmitter();
  poses!: Array<{ title: string; id: number }>;
  categories!: Array<{ enTitle: string; id: number }>;
  selectedFile!: File;
  @Input() id!: string;
  @Input() enName!: string;
  @Input() arName!: string;
  @Input() enDescription!: string;
  @Input() arDescription!: string;
  @Input() email!: string;
  @Input() brandKey!: string;
  @Input() imageUrl!: string;
  @Input() createdAt!: string;
  @Input() updatedAt!: string;
  @Input() subscriptionStatus!: string;
  @Input() integrationId!: string;
  @Input() pos!: PosModel;
  @Input() ecommerceType!: Ecommerce | null;
  @Input() phoneNumber!: Ecommerce | null;
  @Input() category?: {
    id: number;
    enTitle: string;
  };
  constructor(
    private merchantService: MerchantService,
    private posService: PosService,
    private merchantCategoryService: MerchantCategoryService,
    public activeModal: NgbActiveModal,
    private toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.posService.getPoses({}).subscribe((data) => {
      this.poses = data.items.map((pos) => {
        return { title: pos.title, id: pos.id };
      });
    });
    this.merchantCategoryService.getCategories({}).subscribe((data) => {
      this.categories = data.items.map((category) => {
        return { enTitle: category.enTitle, id: category.id };
      });
    });
  }
  selectFile(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  async submit(form: NgForm) {
    const updatedValues: any = {};
    Object.keys(form.controls).forEach((formElement) => {
      if (form.controls[formElement].dirty && formElement === 'file') {
        updatedValues['file'] = this.selectedFile;
      } else if (form.controls[formElement].dirty) {
        updatedValues[formElement] = form.controls[formElement].value;
      }
    });
    if (form.invalid) {
      this.showDanger(`Please enter data correctly`);
      return;
    }
    this.merchantService
      .updateMerchant({
        id: this.id,
        ...updatedValues,
      })
      .subscribe({
        next: (data) => {
          this.showSuccess(`${data.affected} merchant updated`);
          this.merchantUpdated.emit();
        },
        error: (error) =>
          this.showDanger(`error from server ${error.error.message}`),
      });
  }

  showSuccess(message: string) {
    this.toastService.show(message, {
      classname: 'bg-success text-light',
      delay: 5000,
    });
  }

  showDanger(message: string) {
    this.toastService.show(message, {
      classname: 'bg-danger text-light',
      delay: 5000,
    });
  }

  ngOnDestroy(): void {
    this.toastService.clear();
  }
}
