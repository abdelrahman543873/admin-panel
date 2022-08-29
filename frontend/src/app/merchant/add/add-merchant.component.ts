import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MerchantService } from '../merchant.service';

@Component({
  selector: 'app-add-merchant',
  templateUrl: './add-merchant.component.html',
  styleUrls: ['./add-merchant.component.scss'],
})
export class AddMerchantComponent implements OnInit {
  constructor(private merchantService: MerchantService) {}

  ngOnInit(): void {}

  submit(form: NgForm) {
    this.merchantService.addMerchant(form.value).subscribe((data) => {
      console.log(data);
    });
  }
}
