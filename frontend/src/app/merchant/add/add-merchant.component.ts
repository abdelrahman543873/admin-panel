import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MerchantService } from '../merchant.service';
import { PosService } from '../../pos/pos.service';

@Component({
  selector: 'app-add-merchant',
  templateUrl: './add-merchant.component.html',
  styleUrls: ['./add-merchant.component.scss'],
})
export class AddMerchantComponent implements OnInit {
  poses!: Array<{ title: string; id: number }>;
  constructor(
    private merchantService: MerchantService,
    private posService: PosService,
  ) {}

  ngOnInit(): void {
    this.posService.getPoses({}).subscribe((data) => {
      this.poses = data.items.map((pos) => {
        return { title: pos.title, id: pos.id };
      });
    });
  }

  submit(form: NgForm) {
    if (form.invalid) return;
    this.merchantService
      .addMerchant({ ...form.value, pos: form.value.pos.id })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
