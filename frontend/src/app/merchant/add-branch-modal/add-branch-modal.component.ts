import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add-branch-modal',
  templateUrl: './add-branch-modal.component.html',
  styleUrls: ['./add-branch-modal.component.scss'],
})
export class AddBranchModalComponent {
  constructor(public activeModal: NgbActiveModal) {}
}
