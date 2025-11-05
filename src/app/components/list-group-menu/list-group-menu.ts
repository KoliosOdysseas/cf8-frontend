import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-list-group-menu',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './list-group-menu.html',
  styleUrl: './list-group-menu.css',
})
export class ListGroupMenu {
 menu=[
  {text:"Step 2 Person Table", link: 'person-table-example'}
  {text:"Step 3 Component Input" , link:'component-input-exampe'}
  {text:"Step 4 @for Directive", link:'for-directive-example'}
 ]
}
