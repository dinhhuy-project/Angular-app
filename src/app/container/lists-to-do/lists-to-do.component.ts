import { NgForOf } from '@angular/common';
import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-lists-to-do',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './lists-to-do.component.html',
  styleUrl: './lists-to-do.component.scss'
})
export class ListsToDoComponent {
  @Output()
  lists = [
    {
      activity: 'Create new project',
      done: false
    },
    {
      activity: 'Working call',
      done: false
    },
    {
      activity: 'Meet with doctor',
      done: false
    },
    {
      activity: 'Meet with doctor',
      done: false
    },
    {
      activity: 'Meet with doctor',
      done: false
    },
    {
      activity: 'Meet with doctor',
      done: false
    },
    {
      activity: 'Meet with doctor',
      done: false
    },
    {
      activity: 'Meet with doctor',
      done: false
    },
    {
      activity: 'Meet with doctor',
      done: false
    },
  ];

  done(num:number) {
    this.lists[num].done = !this.lists[num].done;
  }
}
