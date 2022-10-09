import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BranchService } from '../branch.service';
import { AddBranchDto } from '../inputs/add-branch.dto';
@Component({
  selector: 'app-add-branch-modal',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.scss'],
})
export class AddBranchComponent {
  @Input()
  merchantId!: number;

  @Output() branchAdded = new EventEmitter();
  constructor(
    public activeModal: NgbActiveModal,
    public readonly branchService: BranchService,
  ) {}

  addBranch(branchDto: AddBranchDto) {
    this.branchService
      .addBranch({ ...branchDto, merchantId: this.merchantId })
      .subscribe((branch) => {
        if (branch.id) {
          this.branchAdded.emit();
        }
      });
    this.activeModal.close('Save click');
  }
}
