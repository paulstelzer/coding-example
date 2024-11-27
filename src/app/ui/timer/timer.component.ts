import { ChangeDetectorRef, Component } from '@angular/core';
import { CustomDatePipe } from "./custom-date.pipe";

@Component({
  selector: 'app-timer',
  imports: [
    CustomDatePipe
  ],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {
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
