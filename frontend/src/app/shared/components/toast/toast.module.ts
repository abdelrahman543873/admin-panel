import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastsContainer } from './toast-container.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ToastsContainer],
  imports: [NgbModule, CommonModule],
  exports: [ToastsContainer],
})
export class ToastModule {}
