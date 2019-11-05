import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbActiveModal, NgbDateAdapter, NgbDateNativeAdapter, NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';
import {CalendarEventPeriod} from '../calendar.model';
import {CustomDatepickerI18n, I18n} from '../../../services/i18n.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {ApiService} from '../../../services/api.service';
import {TestService} from '../../../services/test.service';

@Component({
  selector: 'app-calendar-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css'],
  providers: [
    I18n,
    {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n},
    {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}
  ]
})

export class EventModalComponent {
  @Input() calendarEventPeriod: CalendarEventPeriod;
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();

  imagePreview: SafeResourceUrl;

  constructor(
    public activeModal: NgbActiveModal,
    private sanitizer: DomSanitizer,
    private apiServce: TestService
  ) {
  }

  ngOnInit() {

  }

  close() {
    this.change.emit(false);
    this.activeModal.close();
  }

  public setColor(color: string) {
    this.calendarEventPeriod.color = color;
  }

  save() {
    if (this.imagePreview) {
      this.apiServce.uploadImage({
        image: this.imagePreview.toString()
      })
        .subscribe((data: any) => {
          if (data.success) {
            this.calendarEventPeriod.image = data.url;
            this.imagePreview = null;
            this.save();
          }
      });
    } else {
      this.change.emit(true);
      this.activeModal.close();
    }
  }

  uploadImage(files) {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.imagePreview = this.sanitizer.bypassSecurityTrustResourceUrl(e.target.result);
    }

    reader.readAsDataURL(files[0]);
  }

  deleteImage() {
    this.calendarEventPeriod.image = null;
    this.imagePreview = null;
  }
}

