import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbActiveModal, NgbDateAdapter, NgbDateNativeAdapter, NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css'],
})

export class ConfirmModalComponent {
  @Input() confirmTitle: string;
  @Input() confirmText: string;
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    public activeModal: NgbActiveModal,
  ) {
  }

  confirm() {
    this.change.emit(true);
    this.activeModal.close();
  }

  cancel() {
    this.change.emit(false);
    this.activeModal.close();
  }

}

