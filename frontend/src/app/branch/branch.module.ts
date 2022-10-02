import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddBranchComponent } from './add-branch/add-branch.component';

@NgModule({
  declarations: [AddBranchComponent],
  imports: [CommonModule, FormsModule],
})
export class BranchModule {}
