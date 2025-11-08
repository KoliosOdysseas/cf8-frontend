import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { sortBy } from 'lodash-es';

@Component({
  selector: 'app-step6-simple-datatable',
  imports: [],
  templateUrl: './step6-simple-datatable.html',
  styleUrl: './step6-simple-datatable.css',
})
export class Step6SimpleDatatable {
  @Input() data: Person[] | undefined;
  @Output() personClicked = new EventEmitter<Person>()

  sortOrder: Record<'firstname' | 'lastname' | 'email', 'none' | 'asc' | 'desc'> = {
    firstname: 'none',
    lastname: 'none',
    email: 'none'
  }

  sortData(sortKey: keyof typeof this.sortOrder): void {
    if (this.sortOrder[sortKey] === 'asc') {
      this.sortOrder[sortKey] = 'desc';
      this.data = sortBy(this.data ?? [], sortKey as string).reverse();
    } else {
      this.sortOrder[sortKey] = 'asc';
      this.data = sortBy(this.data ?? [], sortKey as string);
    }

    for (let key in this.sortOrder) {
      if (key !== sortKey) {
        this.sortOrder[key as keyof typeof this.sortOrder] = 'none';
      }
    }
  }

  sortSign(sortKey: keyof typeof this.sortOrder): string {
    if (this.sortOrder[sortKey] === 'asc') return '\u2191'
    else if (this.sortOrder[sortKey] === 'desc') return '\u2193'
    else return '';
  }

  onPersonClick(person: Person) {
    console.log("Step 6", person);
    this.personClicked.emit(person)
  }
  
}