import { NgModule } from '@angular/core';
import { ModalDraggableDirective } from './modal-draggable.directive';
import { ImageDropDirective } from './image-drop.directive';

@NgModule({
  declarations: [
    ModalDraggableDirective,
    ImageDropDirective
  ],
  exports: [
    ModalDraggableDirective,
    ImageDropDirective
  ],
})
export class DirectivesModule {
}
