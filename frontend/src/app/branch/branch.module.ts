import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component';
import { BranchRoutingModule } from './branch-routing.module';
import { DeviceListComponent } from '../device/device-list/device-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PosBranchListComponent } from '../pos/pos-branch-list/pos-branch-list.component';
import { BranchListComponent } from './branch-list/branch-list.component';
import { ToastModule } from '../shared/components/toast/toast.module';

@NgModule({
  declarations: [
    AddBranchComponent,
    BranchDetailsComponent,
    DeviceListComponent,
    PosBranchListComponent,
    BranchListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BranchRoutingModule,
    NgbModule,
    ToastModule,
  ],
  exports: [BranchListComponent],
})
export class BranchModule {}
