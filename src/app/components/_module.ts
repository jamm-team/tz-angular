import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatSliderModule } from '@angular/material';
import { CalendarComponent } from './calendar/calendar.component';
import { PipesModule } from '../pipes/_module';
import { EventBlockComponent } from './calendar/event-block/event-block.component';
import { EventModalComponent } from './calendar/event-modal/event-modal.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { DirectivesModule } from '../directives/_module';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { InputBlockComponent } from './calendar/input-block/input-block.component';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    MatIconModule,
    MatFormFieldModule,
    MatSliderModule,
    FormsModule,
    PipesModule,
    DirectivesModule,
  ],
  declarations: [
    CalendarComponent,
    EventBlockComponent,
    InputBlockComponent,
    EventModalComponent,

    ColorPickerComponent,
    ConfirmModalComponent
  ],
  exports: [
    CalendarComponent,
    EventBlockComponent,
    InputBlockComponent,
    EventModalComponent,

    ColorPickerComponent,
    ConfirmModalComponent
  ],
  entryComponents: [EventModalComponent, ConfirmModalComponent],
  providers: [],
})

export class ComponentsModule { }
