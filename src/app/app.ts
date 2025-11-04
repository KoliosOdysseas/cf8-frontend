import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Step2PersonTable } from './components/step2-person-table/step2-person-table';

@Component({
  selector: 'app-root',
  imports: [Step2PersonTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = "Angular";
}
