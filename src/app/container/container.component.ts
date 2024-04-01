import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { ListsToDoComponent } from './lists-to-do/lists-to-do.component';
import { AddingComponent } from './adding/adding.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [HeaderComponent, TitleComponent, ListsToDoComponent, AddingComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {
  // lists_to_do = lists;

}
