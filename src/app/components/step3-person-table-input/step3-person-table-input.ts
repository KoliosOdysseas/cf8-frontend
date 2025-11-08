import { Component, Input } from '@angular/core';
import { Person } from '../../shared/interfaces/person';


@Component({
  selector: 'app-step3-person-table-input',
  templateUrl: './step3-person-table-input.html',
  styleUrls: ['./step3-person-table-input.css'],
})
export class Step3PersonTableInput {
  @Input() person: Person | undefined;
  user = {
    firstname: 'Luca',
    lastname: 'Jovic',
    email: 'luca.jovic@example.com'
  }
}
