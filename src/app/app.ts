import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from './login/login';
import {MainDashboard} from './dashboard/main-dashboard/main-dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, MainDashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DetectRansom');
}
