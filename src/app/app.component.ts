import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimeComponent } from './ui/timer/time.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TimeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'coding-example';
}
