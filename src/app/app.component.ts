import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CustomDatePipe } from './custom-date.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe, CustomDatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'coding-example';

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
