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
  poses!: Array<string>;
  currentPosSelection!: string;
  constructor(
    private merchantService: MerchantService,
    private posService: PosService,
  ) {}

  ngOnInit(): void {
    this.posService.getPoses({}).subscribe((data) => {
      this.poses = data.items.map((pos) => {
        return pos.title;
      });
    });
  }

  submit(form: NgForm) {
    this.merchantService.addMerchant(form.value).subscribe((data) => {
      console.log(data);
    });
  }

  selectPos(pos: string) {
    this.currentPosSelection = pos;
  }
}
