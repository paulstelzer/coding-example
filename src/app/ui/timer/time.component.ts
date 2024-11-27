import { ChangeDetectorRef, Component } from '@angular/core';
import { CustomDatePipe } from "./custom-date.pipe";

@Component({
  selector: 'app-timer',
  imports: [
    CustomDatePipe
  ],
  templateUrl: './time.component.html',
  styleUrl: './time.component.scss'
})
export class TimeComponent {
  get time() {
    return new Date();
  }

  constructor(private cdr: ChangeDetectorRef) {
    setInterval(() => {
      this.updateTime();
    }, 500)
  }

  updateTime() {
    // update the time
    this.cdr.detectChanges()
  }
}
