import { NgForOf } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-lists-to-do',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './lists-to-do.component.html',
  styleUrl: './lists-to-do.component.scss'
})
export class ListsToDoComponent {
  @Input()
  lists = [
    {
      activity: 'Start your "to do" here',
      done: false
    },
  ];

  done(num:number) {
    this.lists[num].done = !this.lists[num].done;
    console.log(this.lists[num].done)
  }

  refresh() {
    for(var i=0; i<this.lists.length; i++)
    {
      if(this.lists[i].done == true)
      {
        this.lists.splice(i, 1);
        console.log(`removed the ${this.lists[i].activity}`)
      }
    }
  }
}
