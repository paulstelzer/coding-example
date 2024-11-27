import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimerComponent } from './ui/timer/timer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TimerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'coding-example';
}
