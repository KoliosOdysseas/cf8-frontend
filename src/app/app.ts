import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Step2PersonTable } from './components/step2-person-table/step2-person-table';
import { Step3PersonTableInput } from './components/step3-person-table-input/step3-person-table-input';
import { Step4ForDirective } from './components/step4-for-directive/step4-for-directive';
import { Person } from './shared/interfaces/person';


@Component({
  selector: 'app-root',
  imports: [Step2PersonTable, Step3PersonTableInput, Step4ForDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = "Angular";

  //step 3 input component 
  person1: Person = {
    firstName: 'User1 name',
    lastName: 'User1 surename',
    email: 'user1@example.com'
}
person2: Person = {
    firstName: 'User2 name',
    lastName: 'User2 surename',
    email: 'user2@example.com'
}
}