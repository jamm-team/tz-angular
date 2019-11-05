import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalRef: any;

  constructor(
    private ngbModal: NgbModal
  ) {}

  open(content: any, config?: any) {
    this.modalRef = this.ngbModal.open(content, config);

    // const instance = (modal as any)._windowCmptRef.instance;
    // instance.windowClass = 'custom-show';
    //
    // const fx = (modal as any)._removeModalElements.bind(modal);
    //
    // (modal as any)._removeModalElements = () => {
    //   instance.windowClass = '';
    //   setTimeout(fx, 250);
    // };


    return this.modalRef;
  }

  close() {
    if (this.modalRef) {
      this.modalRef.close();
    }
  }
}
