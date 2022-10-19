import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MerchantService } from '../merchant.service';
import { PosService } from '../../pos/pos.service';
import { MerchantCategoryService } from '../../merchant-category/merchant-category.service';

@Component({
  selector: 'app-add-merchant',
  templateUrl: './add-merchant.component.html',
  styleUrls: ['./add-merchant.component.scss'],
})
export class AddMerchantComponent implements OnInit {
  poses!: Array<{ title: string; id: number }>;
  categories!: Array<{ enTitle: string; id: number }>;
  selectedFile!: File;
  constructor(
    private merchantService: MerchantService,
    private posService: PosService,
    private merchantCategoryService: MerchantCategoryService,
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
    if (form.invalid) return;
    this.merchantService
      .addMerchant({
        ...form.value,
        pos: form.value.pos.id,
        category: form.value.category.id,
        file: this.selectedFile,
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
