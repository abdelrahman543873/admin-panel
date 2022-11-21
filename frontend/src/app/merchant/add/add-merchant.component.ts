import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MerchantService } from '../merchant.service';
import { PosService } from '../../pos/pos.service';
import { MerchantCategoryService } from '../../merchant-category/merchant-category.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../shared/components/toast/toast.service';

@Component({
  selector: 'app-add-merchant',
  templateUrl: './add-merchant.component.html',
  styleUrls: ['./add-merchant.component.scss'],
})
export class AddMerchantComponent implements OnInit, OnDestroy {
  poses!: Array<{ title: string; id: number }>;
  categories!: Array<{ enTitle: string; id: number }>;
  selectedFile!: File;
  constructor(
    private merchantService: MerchantService,
    private posService: PosService,
    private merchantCategoryService: MerchantCategoryService,
    public activeModal: NgbActiveModal,
    private toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.posService.getPoses({ activated: true }).subscribe((data) => {
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
    if (form.invalid) {
      this.showDanger(`Please enter data correctly`);
      return;
    }
    this.merchantService
      .addMerchant({
        ...form.value,
        pos: form.value.pos.id,
        category: form.value.category.id,
        file: this.selectedFile,
      })
      .subscribe({
        next: (data) => this.showSuccess(data.enName),
        error: (error) =>
          this.showDanger(`error from server ${error.error.message}`),
      });
  }

  showSuccess(merchantName: string) {
    this.toastService.show(`merchant ${merchantName} Added Successfully`, {
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
