import {DateDayPipe} from './date-day.pipe';
import {NgModule} from '@angular/core';
import {ActivePipe} from './active.pipe';

@NgModule({
  declarations: [
    DateDayPipe,
    ActivePipe
  ],
  exports: [
    DateDayPipe,
    ActivePipe
  ],
})
export class PipesModule {
}
