import { Component } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-step2-person-table',
  imports: [],
  templateUrl: './step2-person-table.html',
  styleUrl: './step2-person-table.css',
})
export class Step2PersonTable {
 user = {
  firstName: 'John',
  lastName: 'Doe',
  email:'john.doe@aueb.gr'
 }
}
